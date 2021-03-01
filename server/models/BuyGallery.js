const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  // class:{type:String},
  photo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Photo' },
  user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User' },

})

module.exports = mongoose.model('BuyGallery',scheme)