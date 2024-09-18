import mongoose, { Schema } from "mongoose";

const tweetSchema = new mongoose.Schema({
  authorId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  content: { type: String, required: true },
  likesCount: { type: Number, default: 0 },
  retweetsCount: { type: Number, default: 0 },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;