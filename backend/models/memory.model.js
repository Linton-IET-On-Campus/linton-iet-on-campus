const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memorySchema = new Schema({

    name: { type: String, required: true },
    quote: { type: String, required: true },

}, {
  timestamps: true,
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;