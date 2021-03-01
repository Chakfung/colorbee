const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  customer: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  theme: { type: mongoose.SchemaTypes.ObjectId, ref: 'Theme' },
  name:{type:String},
  date:{type:String},
  tel:{type:String},
  info:{type:String},
  address:{type:String},
})

module.exports = mongoose.model('AppointOrder',scheme)