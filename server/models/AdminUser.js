const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  username:{type:String},
  password:{type:String,
    select:false,
    set(val){
      return require('bcryptjs').hashSync(val,10)
    }},
})

module.exports = mongoose.model('AdminUser',scheme)