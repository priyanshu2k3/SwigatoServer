const mongoose = require('mongoose');

var restaurant = mongoose.Schema(

    {
        "has_online_delivery": Number,
        "photos_url": String,
        "url": String,
        "price_range": Number,
        "user_rating": {
        "rating_text": String,
        "rating_color": String,
        "votes": Number,
        "aggregate_rating":Number 
        },
        "res_id": Number,
        "name": String,
        "cuisines": String,
        "is_delivering_now": Number,
        "deeplink": String,
        "menu_url": String,
        "average_cost_for_two": Number,
        "book_url": String,
        "switch_to_order_menu": Number,
        "has_table_booking": Number,
        "location": {
        "latitude": Number,
        "address":String,
        "city": String,
        "country_id": Number,
        "locality_verbose": String,
        "city_id": Number,
        "zipcode": Number,
        "longitude": Number,
        "locality":String
        },
        "featured_image": String,
        "currency": "Rs.",
        "thumb": String,
        "establishment_types": [],
        "events_url": String
        }
);

const restaurantSchema=mongoose.model('restaurant ', restaurant);

module.exports = restaurantSchema;