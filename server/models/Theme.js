const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  // class:{type:String},
  photographer: { type: mongoose.SchemaTypes.ObjectId, ref: 'Photographer' },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  title:{type:String},
  tag: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  img:[{
    name: { type: String },
    url: { type: String },
  }],
  body:{type:String},
  price:{type:String},
  intro:{type:String},
})

module.exports = mongoose.model('Theme',scheme)