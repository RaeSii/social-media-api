const app = require("express").Router()
const { Thoughts } = require('../models')


app.get('/', (req, res) => {
   Thoughts.find({})
      .then(dbThoughts => {
          return dbThoughts;
        }).then(dbThoughts => {
          console.log("Get", dbThoughts)
        return res.json(dbThoughts)
      })
      .catch(err => {
        console.log(err)
       return res.json(err);
      });
  });

  app.get('/:id', (req, res) => {
    Thoughts.findById(req.params.id)
    .then(dbThoughts => {
        return res.json(dbThoughts);
       })
       .catch(err => {
        return res.json(err);
       });
   });

   app.post('/', (req, res) => {
    Thoughts.create(req.body)
       .then(dbThoughts => {
         console.log(dbThoughts)
        return res.json(dbThoughts);
       })
       .catch(err => {
        return res.json(err);
       });
   });

   app.put('/:id', (req, res) => {
    Thoughts.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
       .then(dbThoughts => {
        return res.json(dbThoughts);
       })
       .catch(err => {
        return res.json(err);
       });
   });

   app.post('/:thoughtid/reactions', (req, res) => {
    Thoughts.findOneAndUpdate({_id:req.params.thoughtid},
        {$push:{reactions:req.body}},{new:true})
       .then(dbThoughts => {
        return res.json(dbThoughts);
       })
       .catch(err => {
        return res.json(err);
       });
   });

   app.delete('/:thoughtid/reactions/:reactionid', (req, res) => {
    Thoughts.findOneAndUpdate({_id:req.params.thoughtid},
        {$pull:{reactions:{reactionId:req.params.reactionid}}},{new:true})
       .then(dbThoughts => {
        return res.json(dbThoughts);
       })
       .catch(err => {
        return res.json(err);
       });
   });

   app.delete('/:id', (req, res) => {
    Thoughts.findOneAndDelete({_id:req.params.id})
       .then(dbThoughts => {
        return res.json(dbThoughts);
       })
       .catch(err => {
        return res.json(err);
       });
   });

   module.exports = app;