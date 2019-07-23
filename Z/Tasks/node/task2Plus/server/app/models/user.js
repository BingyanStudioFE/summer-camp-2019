const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userId: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
    maxlength: 20
  },
  nickname: {
    type: String
  },
  mobile: {
    type: String,
    minlength: 11,
    maxlength: 11,
    require: true,
  },
  email: {
    type: String,
    match: RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/),
    require: true
  },
  total_view_count: {
    type: Number,
    default: 0
  },
  total_collect_count: {
    type: Number,
    default: 0
  },
  collections: {
    type: Array,
    default: [],
  }
}, {collection: 'users', versionKey: false});
UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', UserSchema);
