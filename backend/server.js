import express from 'express';
import { MongoClient } from 'mongodb';
import S from 'string';
const app = express();
const dbUrl = 'mongodb://localhost/napapiamento';
import moment from 'moment';

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  app.get('/api/notisia', (req, res) => {
    console.log(`${moment().format()}: get notisia`);
    db.collection('notisianan').find({}).toArray( (err, notisianan) =>{
			const jsonNoti = notisianan.map (noti => {
				noti.enkorto = S(noti.diskripshon).truncate(128).s
        delete noti.diskripshon;
        noti.dia = moment(noti.dia).format('MMMM DD, YYYY');
        return noti;
			})
      // console.log(jsonNoti);
      res.json({ notisianan: jsonNoti });
    });
  });

  app.listen(8080, _ => console.log('Backend started on port 8080'));
})
