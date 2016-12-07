const { MongoClient } = require('mongodb');
const notisia = require('./notisia.json');

const dbUrl = 'mongodb://localhost/napapiamento';

MongoClient.connect(dbUrl, (err, db) => {
  const colNot = db.collection('notisianan');
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
    
  })
});
