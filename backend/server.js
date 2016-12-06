import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const dbUrl = 'mongodb://local.mongo.com/games';

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray( (err, games) =>{

      res.json({ games });
    });
  });

  app.listen(8080, _ => console.log('Backend started on port 8080'));
})
