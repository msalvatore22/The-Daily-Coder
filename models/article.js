const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema ({
  title: String,
  author: String,
  url: String,
  img_url: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  dateSaved: Date
})

mongoose.model('articles', articleSchema);