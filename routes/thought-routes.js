const app = require("express").Router()
const { Thoughts,Thoughts} = require('../models')


app.get('/', (req, res) => {
   Thoughts.find({})
      .then(dbThoughts => {
        res.json(dbThoughts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get('/:id', (req, res) => {
    Thoughts.findById(req.params.id{})
       .then(dbThoughts => {
         res.json(dbThoughts);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.post('/', (req, res) => {
    Thoughts.create(req.body)
       .then(dbThoughts => {
         res.json(dbThoughts);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.put('/:id', (req, res) => {
    Thoughts.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
       .then(dbThoughts => {
         res.json(dbThoughts);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.post('/:thoughtid/reactions', (req, res) => {
    Thoughts.findOneAndUpdate({_id:req.params.id},
        {$push:{reactions:req.body}},{new:true})
       .then(dbThoughts => {
         res.json(dbThoughts);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.delete('/:thoughtid/reactions/:reactionid', (req, res) => {
    Thoughts.findOneAndUpdate({_id:req.params.id},
        {$pull:{reactions:{reactionId:req.params.reactionid}}},{new:true})
       .then(dbThoughts => {
         res.json(dbThoughts);
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.delete('/:id', (req, res) => {
    Thoughts.findOneAndDelete({_id:req.params.id})
       .then(dbThoughts => {
         res.json(dbThoughts);
       })
       .catch(err => {
         res.json(err);
       });
   });

   module.exports = app;