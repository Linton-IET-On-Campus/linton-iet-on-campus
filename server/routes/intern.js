const router = require('express').Router();
let Intern = require('../models/intern.model');

router.route('/').get((req, res) => {
  Intern.find()
    .then(intern => res.json(intern))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const img = req.body.img;
  const name = req.body.name;
  const position = req.body.position;
  const salary = req.body.salary;
  const location = req.body.location;
  const duration = req.body.duration;
  const description = req.body.description;
  const link = req.body.link;

  const newIntern = new Intern({
    img,
    name,
    position,
    salary,
    location,
    duration,
    description,
    link
  });

  newIntern.save()
  .then(() => res.json('Internship added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Intern.findById(req.params.id)
    .then(intern => res.json(intern))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Intern.findByIdAndDelete(req.params.id)
    .then(() => res.json('Internship deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Intern.findById(req.params.id)
    .then(intern => {
        intern.img = req.body.img;
        intern.name = req.body.name;
        intern.position = req.body.position;
        intern.salary = req.body.salary; 
        intern.location = req.body.location;
        intern.duration = req.body.duration;
        intern.description = req.body.description;
        intern.link = req.body.link;

        intern.save()
        .then(() => res.json('Internship updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;