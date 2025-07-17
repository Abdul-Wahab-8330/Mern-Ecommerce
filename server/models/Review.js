const mongoose = require('mongoose')


const ProductReviewSchema = new mongoose.Schema({
    ProductId: String,
    userId: String,
    userName: String,
    reviewMessage: String,
    reviewValue: Number

}, {timestamps: true})

module.exports = mongoose.model('ProductReview', ProductReviewSchema)