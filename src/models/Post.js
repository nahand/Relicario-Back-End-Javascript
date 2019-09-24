const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  text: String
},{
  timestamps: true
});

mongoose.model('Post', PostSchema);
