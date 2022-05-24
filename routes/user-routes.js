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
    User.findById(req.params.id{})
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

   module.exports = app;