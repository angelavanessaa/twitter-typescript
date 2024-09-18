import mongoose from "mongoose";
import Tweet from "../tweets/tweetModel";
import Like from "./likeModel";

const likeAndUnlikeTweet = async (userId: string, tweetId: string) => {
  try {
    const tweet = await Tweet.findOne({ _id: tweetId });
    if (!tweet) throw new Error('Tweet not found');

    const existingLike = await Like.findOne({ userId, tweetId });
    if (existingLike) {
      // unlike the tweet
      await Like.findByIdAndDelete(existingLike._id);

      // decrease the like count in the tweet
      tweet.likesCount -= 1;
      await tweet.save();
      return null;
    } else {
      const like = new Like({ userId, tweetId, createdAt: new Date() });
      await like.save();

      // increase the like count in the tweet
      tweet.likesCount += 1;
      await tweet.save();
      return like;
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

export default { likeAndUnlikeTweet };