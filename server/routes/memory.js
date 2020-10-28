const router = require('express').Router();
let Memory = require('../models/memory.model');

router.route('/').get((req, res) => {
    Memory.find()
    .then(intern => res.json(intern))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const quote = req.body.quote;


  const newMemory = new Memory({
    
    name,
    quote,
   
  });

  newMemory.save()
  .then(() => res.json('Memory added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Memory.findById(req.params.id)
    .then(memory => res.json(memory))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Memory.findByIdAndDelete(req.params.id)
    .then(() => res.json('Memory deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Memory.findById(req.params.id)
    .then(memory => {
        memory.name = req.body.name;
        memory.quote = req.body.quote;

        memory.save()
        .then(() => res.json('Memory updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;