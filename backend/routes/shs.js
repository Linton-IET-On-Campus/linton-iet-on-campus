const router = require('express').Router();
let SHS = require('../models/shs.model');

router.route('/').get((req, res) => {
  SHS.find()
    .then(shs => res.json(shs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const img = req.body.img;
  const title = req.body.title;
  const field = req.body.field;
  const description = req.body.description;
  const leader = req.body.leader;
  const day = req.body.day;
  const time = req.body.time;
  const link = req.body.link;  
  const meet = req.body.meet;

  const newSHS = new SHS({
    img,
    title,
    field,
    description,
    leader,
    day,
    time,
    link,
    meet
  });

  newSHS.save()
  .then(() => res.json('New SHS group added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Committee.findById(req.params.id)
    .then(committee => res.json(committee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    SHS.findByIdAndDelete(req.params.id)
    .then(() => res.json('SHS group deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    SHS.findById(req.params.id)
    .then(shs => {
      shs.img = req.body.img;
      shs.title = req.body.title;
      shs.field = req.body.field;
      shs.description = req.body.description; 
      shs.leader = req.body.leader;
      shs.day = req.body.day;
      shs.time = req.body.time; 
      shs.link = req.body.link;
      shs.meet = req.body.meet;


      shs.save()
        .then(() => res.json('SHS group updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;