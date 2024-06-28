const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
    title: {type: String, required:true},
    description: String,
    price: {type:Number, min:[0,'wrong price']},
    discountPercentage:{type:Number, min:[0,'wrong min Discount'], max:[50,'wrong max Discount']},
    rating: {type:Number, min:[0,'wrong min rating'], max:[5,'wrong max rating'],default:0},
    // discountPercentage:Number,
    // rating: Number,
    brand: {type: String, required:true},
    category: {type: String, required:true},
    images: [String],
    thumbnail: {type: String, required:true},

});
exports.Product = mongoose.model('Product',productSchema)
