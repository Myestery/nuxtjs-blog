const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    User: { type: Schema.Types.ObjectId, ref: "User", required: true },
    body: { type: String, required: true },
    image: { type: String },
    comments: [
      new Schema({
        comment: { type: String, required: true },
        User: { type: Schema.Types.ObjectId, ref: "User", required: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
      })
    ],
    likes: [
      new Schema({
        User: { type: Schema.Types.ObjectId, ref: "User", required: true,unique:true }
      })
    ]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.model("Blog", Blog);
