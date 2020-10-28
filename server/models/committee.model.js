const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const committeeSchema = new Schema({

    img: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    whatsapp: { type: String, required: true },
    email: { type: String, required: true },
  
}, {
  timestamps: true,
});

const Committee = mongoose.model('Committee', committeeSchema);

module.exports = Committee;