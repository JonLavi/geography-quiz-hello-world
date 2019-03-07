const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const mongodb_connection = require('./helpers/mongodb_connection.js');
// const fetch = require('node-fetch');


const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());
 
app.get('/', function (req, res) {
  res.sendFile('index.html');
});

MongoClient.connect(process.env.MONGODB_URIp, { useNewUrlParser: true })
  .then((client) => {
    const db = client.db('heroku_3mr9jt7k');
    const hellosCollection = db.collection('hellos');
    const helloRouter = createRouter(hellosCollection);
    app.use('/api/hellos', helloRouter);
  })
  .catch(console.error);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
