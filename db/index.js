const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reviews', {useMongoClient: true})

const reviewSchema = new mongoose.Schema({
    itemId: Number,
    itemName: String,
    reviews: Array
})

exports.Reviews = mongoose.model('Reviews', reviewSchema)

/*
**** DATA IN Reviews.reviews ****

    reviewId: Number,
    username: String,
    location: String,
    age: String,
    height: String,
    title: String,
    body: String,
    fit: String,
    sizePurchased: String,
    sizeNormalyWorn: String,
    recommended: Boolean,
    date: Date,
    stars: Number
    
*/