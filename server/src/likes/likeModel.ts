import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  tweetId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Tweet' },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdAt: { type: Date, required: true },
});

const Like = mongoose.model("Like", likeSchema);
export default Like;