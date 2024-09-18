import retweetService from "./retweetService";

export const executeRetweet = async (req, res) => {
  const { userId, tweetId } = req.body;

  try {
    const retweet = await retweetService.retweetPost(userId, tweetId);
    return res.status(201).send(retweet);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}