const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  name:{type:String},
  slogan1:{type:String},
  slogan2:{type:String},
  img:{type:String}
})

module.exports = mongoose.model('Advertisement',scheme)