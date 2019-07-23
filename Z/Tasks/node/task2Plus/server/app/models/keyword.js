const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const KeywordSchema = new Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },
    word: {
        type: String,
        unique: true,
        require: true
    },
    count: {
        type: Number,
        default: 1
    }
}, {collection: 'keywords', versionKey: false});
KeywordSchema.plugin(uniqueValidator);
module.exports = mongoose.model('keyword', KeywordSchema);
