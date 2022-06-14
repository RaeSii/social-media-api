const app = require("express").Router()
const { User, Thoughts } = require('../models')

app.get('/', (req, res) => {
  User.find({})
    .then(dbUser => {
      console.log("Get", dbUser)
      return dbUser;
    }).then(dbUser => {

      return res.status(200).json(dbUser)
    })
    .catch(err => {
      return res.json(err);
    });
});

app.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(dbUser => {
      return res.json(dbUser);
    })
    .catch(err => {
      return res.json(err);
    });
});

app.post('/', (req, res) => {
  User.create(req.body)
    .then(dbUser => {
      console.log("Post", dbUser)
      return res.status(200).json(dbUser);
    })
    .catch(err => {
      return res.json(err);
    });
});

app.put('/:id', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
    .then(dbUser => {
      return res.json(dbUser);
    })
    .catch(err => {
      return res.json(err);
    });
});

app.delete('/:id', (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(dbUser => {
      return res.json(dbUser);
    })
    .catch(err => {
      return res.json(err);
    });
});

app.put('/:id/friends/:friendId', (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, { $push: { friends: req.params.friendId } }, { new: true })
    .then(dbUser => {
      return res.json(dbUser);
    })
    .catch(err => {
      return res.json(err);
    });
});

app.delete('/:id/friends/:friendId', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } }, { new: true })
    .then(dbUser => {
      return res.json(dbUser);
    })
    .catch(err => {
      return res.json(err);
    });
});

module.exports = app;