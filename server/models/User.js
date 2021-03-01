const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  avatar:{type:String},
  name:{type:String},
  username:{type:String},
  password:{type:String,
    select:false,
    set(val){
      return require('bcrypt').hashSync(val,10)
    }},
  type:{type:String}
})

module.exports = mongoose.model('User',scheme)