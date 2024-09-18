import tweetService from "./tweetService";

export const getTweets = async (_, res) => {
  try {
    const tweets = await tweetService.getTweets();
    return res.status(200).send(tweets);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export const createTweet = async (req, res) => {
  try {
    const tweet = await tweetService.createTweet(req.body);
    return res.status(201).send(tweet)
  } catch (err) {
    return res.status(500).send(err.message);
  }
}