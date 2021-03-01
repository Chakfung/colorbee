const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  theme: { type: mongoose.SchemaTypes.ObjectId, ref: 'Theme' },

})

module.exports = mongoose.model('CollectTheme',scheme)