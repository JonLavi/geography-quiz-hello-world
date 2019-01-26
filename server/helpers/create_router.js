const express = require('express');
const ObjectID = require('mongodb').ObjectID; // used to transform Ids from String to ObjectID 'class';
// header('Access-Control-Allow-Origin: *');
const createRouter = function (collection) { // takes the database collection to work with it

  const router = express.Router(); // listening to localhost/api/games

  // index
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  })

  // show
  router.get('/:id', (req, res) => {
    const id = req.params.id; // pull out ID from request, which arrives as String!
    collection
      .findOne({ _id: ObjectID(id) }) // transform String ID into objectID 'class' and find
      .then((docs) => res.json(docs)) // return document as json. can test by pasting into Insomnia
      .catch(console.error)
  })

  // post
  router.post('/', (req, res) => {
    const newGame = req.body; // saving new game data to a variable (comes from response)
    collection
      .insertOne(newGame) // add it to DB
      .then(() => collection.find().toArray()) // in-line function: implicit return of collection in a one-line function
      .then((docs) => res.json(docs)) // return the full list of games
      .catch(console.error)
  })

  // delete
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id)})
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs)) // return document as json. can test by pasting into Insomnia
      .catch(console.error)
  })

  // update
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changedData = req.body;
    collection
      .updateOne({ _id: ObjectID(id)}, {$set: changedData})
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch(console.error)
  })

  return router;

};

module.exports = createRouter;
