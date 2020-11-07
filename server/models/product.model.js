const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    imgOne: { type: String, required: true },
    imgTwo: { type: String, required: true },
    label: { type: String, required: true },
    discount: { type: String, required: true },
    title: { type: String, required: true },
    discountPrice: { type: String, required: true },
    originalPrice: { type: String, required: true },
    details: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: String, required: true },
    seller: { type: String, required: true },
    whatsapp: { type: String, required: true },

  
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;