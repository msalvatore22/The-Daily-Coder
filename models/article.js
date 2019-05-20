const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const articleSchema = new Schema ({
  title: {type: String, unique: true },
  author: String,
  url: String,
  img_url: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  dateSaved: Date
})

articleSchema.plugin(uniqueValidator, { message: "Article Already Saved" })
mongoose.model('articles', articleSchema);