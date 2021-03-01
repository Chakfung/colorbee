const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  // class:{type:String},
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  class: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  name:{type:String},
  img:{type:String},
  price:{type:String},
  intro:{type:String},
})

module.exports = mongoose.model('Photo',scheme)