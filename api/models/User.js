const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  name: {
    type: Map,
    of: String,
    required:true
  },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});
module.exports= mongoose.model("User", UserSchema);
