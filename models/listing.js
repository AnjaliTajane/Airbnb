const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: { type: String, default: "" },
        url: {
            type: String,
            default: "https://www.istockphoto.com/photo/palm-trees-on-exotic-tropical-beach-gm1186881510-335034898",
        }
    },
    
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;