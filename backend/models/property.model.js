const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    image: String,
    update: String,
    owner: String,
    type: String,
    details: String,
    building: String,
    carpet: String,
    status: String,
    floor: String,
    transaction: String,
    furnishing: String,
    facing: String,
    overlooking: String,
    ownership: String,
    car_parking: String,
    bathroom: String,
    balcony: String,
    description: String,
    total_price: String,
    calculator: String,
    latitude: String,
    longitude: String,
    price_per_sqft: String,
    tag: String
}, {
    versionKey: false
})

const PropertyModel = mongoose.model("property", propertySchema);

module.exports = {
    PropertyModel
}