const express = require('express');

const ObjectID = require('mongodb').ObjectID;
const createRouter = function (collection) {
  
  const router = express.Router();

  // index
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))

      .catch(console.error)

  })

  // show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((docs) => res.json(docs))
      .catch(console.error)
  })

  // post
  router.post('/', (req, res) => {
    const newGame = req.body;
    collection
      .insertOne(newGame)
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch(console.error)
  })

  // delete
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id)})
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
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
