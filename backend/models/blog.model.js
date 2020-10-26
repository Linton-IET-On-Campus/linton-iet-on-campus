const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blog = new Schema({

    img: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    postedOn: { type: String, required: true },


});

const Blog = mongoose.model('Blog', blog);

module.exports = Blog;