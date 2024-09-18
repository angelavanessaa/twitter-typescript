import Retweet from './retweetModel';
import Tweet from '../tweets/tweetModel';

const retweetPost = async (userId: string, tweetId: string) => {
  try {
    const tweet = Tweet.findOne({ _id: tweetId });
    if (!tweet) throw new Error('Tweet not found');

    const retweet = new Retweet({ user: userId, tweet: tweetId, createdAt: new Date() });
    await retweet.save();
    return retweet;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default { retweetPost };