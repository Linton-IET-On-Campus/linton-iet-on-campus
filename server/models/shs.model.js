const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shsSchema = new Schema({

    img: { type: String, required: true },
    title: { type: String, required: true },
    field: { type: String, required: true },
    description: { type: String, required: true },
    leader: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    link: { type: String, required: true },
    meet: { type: String, required: true },

  
}, {
  timestamps: true,
});

const SHS = mongoose.model('SHS', shsSchema);

module.exports = SHS;