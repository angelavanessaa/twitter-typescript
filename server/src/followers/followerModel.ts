import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({
  followerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  followingId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdAt: { type: Date, required: true },
});

const Follower = mongoose.model("Follower", followerSchema);
export default Follower;