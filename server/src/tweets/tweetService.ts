import Tweet from "./tweetModel";

const getTweets = async () => {
  try {
    const tweets = await Tweet.find().sort({ createdAt: -1 });
    return tweets;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createTweet = async (req) => {
  const { content, userId } = req.body;
  try {
    const tweet = new Tweet({ content, user: userId, createdAt: new Date() });
    await tweet.save();
    return tweet;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { getTweets, createTweet };