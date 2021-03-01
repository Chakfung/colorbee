const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  class:{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  title:{type:String},
  introduction:{type:String},
  body:{type:String},
  cover:{type:String},
  author:{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  tag: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
})

module.exports = mongoose.model('Blog',scheme)