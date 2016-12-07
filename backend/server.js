import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/napapiamento';

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  app.get('/api/notisia', (req, res) => {
    db.collection('notisianan').find({}).toArray( (err, notisianan) =>{

      res.json({ notisianan });
    });
  });

  app.listen(8080, _ => console.log('Backend started on port 8080'));
})
