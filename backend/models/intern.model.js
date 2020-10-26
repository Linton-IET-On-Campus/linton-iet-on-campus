const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internSchema = new Schema({

    img: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },

}, {
  timestamps: true,
});

const Intern = mongoose.model('Intern', internSchema);

module.exports = Intern;