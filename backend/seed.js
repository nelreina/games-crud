const { MongoClient } = require('mongodb');
const notisia = require('./notisia.json');
const video = require('./video.json');

const dbUrl = 'mongodb://localhost/napapiamento';

MongoClient.connect(dbUrl, (err, db) => {
  const colNot = db.collection('notisianan');
  const colVideo = db.collection('videonan');
  if (err) {
    console.log(err);
    process.exit(0);
  }
  colNot.remove({}, err2 => {
    if (err2) {
      console.log(err2);
      process.exit(0);
    }
    console.log('Clear out notisianan');
    notisia.forEach(n => {
      n.dia = new Date(n.dia);
      colNot.insert(n);
    })

  });

	colVideo.remove({}, err2 => {
    if (err2) {
      console.log(err2);
      process.exit(0);
    }
    console.log('Clear out videonan');
    video.forEach(n => {
      n.dia = new Date();
      colVideo.insert(n);
    })

  });


});
