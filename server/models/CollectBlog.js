const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  blog: { type: mongoose.SchemaTypes.ObjectId, ref: 'Blog' },

})

module.exports = mongoose.model('CollectBlog',scheme)