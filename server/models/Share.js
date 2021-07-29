const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  // class:{type:String},
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  img:{type:String},
  text:{type:String},
  date:{type:String},
  comment:[{
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    text: { type: String },
    date:{type: String }
  }],
})

module.exports = mongoose.model('Share',scheme)