import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  tweetId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Tweet' },
  authorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;