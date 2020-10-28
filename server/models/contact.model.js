const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({

    email: { type: String, required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: true },
  
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;