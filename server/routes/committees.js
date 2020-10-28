const router = require('express').Router();
let Committee = require('../models/committee.model');

router.route('/').get((req, res) => {
  Committee.find()
    .then(committee => res.json(committee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const img = req.body.img;
  const name = req.body.name;
  const role = req.body.role;
  const description = req.body.description;
  const whatsapp = req.body.whatsapp;
  const email = req.body.email;

  const newCommittee = new Committee({
    img,
    name,
    role,
    description,
    whatsapp,
    email
  });

  newCommittee.save()
  .then(() => res.json('Committee added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Committee.findById(req.params.id)
    .then(committee => res.json(committee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Committee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Committee deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Committee.findById(req.params.id)
    .then(committee => {
      committee.img = req.body.img;
      committee.name = req.body.name;
      committee.role = req.body.role;
      committee.description = req.body.description; 
      committee.whatsapp = req.body.whatsapp;
      committee.email = req.body.email;

      committee.save()
        .then(() => res.json('Committee updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;