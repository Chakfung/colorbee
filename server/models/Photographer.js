const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  avatar:{type:String},
  name:{type:String},
  username:{type:String},
  password:{type:String},
  tel:{type:String},
  wechat:{type:String},
  type:{type:String}
})

module.exports = mongoose.model('Photographer',scheme)