import mongoose from "mongoose";

const retweetSchema = new mongoose.Schema({
  tweetId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Tweet' },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdAt: { type: Date, required: true },
});

const Retweet = mongoose.model("Retweet", retweetSchema);
export default Retweet;