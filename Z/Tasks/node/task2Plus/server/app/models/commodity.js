const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const CommoditySchema = new Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
    },
    category: {
        type: Number,
        require: true,
        min: 1,
        max: 9
    },
    picture: {
        type: String,
    },
    pub_user: {
        type: String,
        require: true
    },
    view_count: {
        type: Number,
        min: 0,
        default: 0
    },
    collect_count: {
        type: Number,
        min: 0,
        default: 0
    }
}, {collection: 'commodities', versionKey: false});
CommoditySchema.plugin(uniqueValidator);
module.exports = mongoose.model('commodity', CommoditySchema);
