const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  email:   String,
  message: String,
  image:   String,
  date:    {type: Date, default: Date.now},
})

module.exports = mongoose.model('Post', PostSchema)