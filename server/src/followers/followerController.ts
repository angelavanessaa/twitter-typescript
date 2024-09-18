import { executeFollowUser } from "./followerService";

export const followUser = async (req, res) => {
  const { followerId, followeeId } = req.body;
  try {
    const follow = await executeFollowUser(followerId, followeeId);
    return res.status(201).send(follow);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}