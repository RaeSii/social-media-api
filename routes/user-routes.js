const app = require("express").Router()
const { User,Thoughts} = require('../models')

app.get('/', (req, res) => {
   User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get('/:id', (req, res) => {
    User.findById(req.params.id)
       .then(dbUser => {
         res.json(dbUser);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.post('/', (req, res) => {
    User.create(req.body)
       .then(dbUser => {
         res.json(dbUser);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.put('/:id', (req, res) => {
    User.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
       .then(dbUser => {
         res.json(dbUser);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.delete('/:id', (req, res) => {
    User.findOneAndDelete({_id:req.params.id})
       .then(dbUser => {
         res.json(dbUser);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.put('/:id/friends/friendId', (req, res) => {
    User.findByIdAndUpdate({_id:req.params.id},{$push:{friends: params.friendId}})
       .then(dbUser => {
         res.json(dbUser);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.delete('/:id/friends/friendId', (req, res) => {
    User.findByIdAndDelete({_id:req.params.id},{$pull:{friends: params.friendId}})
       .then(dbUser => {
         res.json(dbUser);
       })
       .catch(err => {
         res.json(err);
       });
   });

   module.exports = app;