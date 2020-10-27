const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
    Blog.find()
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const img = req.body.img;
  const title = req.body.title;
  const slug = req.body.slug;
  const author = req.body.author;
  const summary = req.body.summary;
  const article = req.body.article;
  const postedOn = req.body.postedOn;

  const newBlog = new Blog({
    img,
    title,
    slug,
    author,
    summary,
    article,
    postedOn
  });

  newBlog.save()
  .then(() => res.json('Blog added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Blog.findById(req.params.id)
    .then(blog => {
        blog.img = req.body.img;
        blog.title = req.body.title;
        blog.slug = req.body.slug;
        blog.author = req.body.author; 
        blog.summary = req.body.summary;
        blog.article = req.body.article;
        blog.postedOn = req.body.postedOn;

        blog.save()
        .then(() => res.json('Blog updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;