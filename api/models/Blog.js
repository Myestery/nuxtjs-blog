const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blog = new Schema({
  title: {
    type: String,
    required: true
  },
  User: { type: Schema.Types.ObjectId, ref: 'User',required:true },
  body: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("Blog", Blog);
