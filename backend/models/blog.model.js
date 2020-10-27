const mongoose = require('mongoose');
const marked = require('marked')
const slugify = require('slugify')

const Schema = mongoose.Schema;

const blog = new Schema({

    img: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
    article: { type: String, required: true },
    postedOn: { type: Date, default: Date.now },
    sanitizedHtml: {
        type: String,
        required: true
      }
});

const Blog = mongoose.model('Blog', blog);

blog.pre('validate', function(next) {
    if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true })
    }
  
    if (this.markdown) {
      this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
  
    next()
  })

module.exports = Blog;