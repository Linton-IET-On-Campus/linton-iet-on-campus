const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const admin = new Schema({

    username: { type: String, required: true },
    password: { type: String, required: true },

});

const Admin = mongoose.model('Admin', admin);

module.exports = Admin;