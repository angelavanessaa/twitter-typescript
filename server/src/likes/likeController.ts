import likeService from "./likeService";

export const executeLike = async (req, res) => {
  const { userId, tweetId } = req.body;

  try {
    const like = await likeService.likeAndUnlikeTweet(userId, tweetId);
    return res.status(201).send(like);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}