import Followers from './followerModel';
import User from '../users/userModel';

export const executeFollowUser = async (followerId: string, followeeId: string) => {
  try {
    const follower = await User.findOne({ _id: followerId });
    if (!follower) throw new Error('Follower not found');

    const followee = await User.findOne({ _id: followeeId });
    if (!followee) throw new Error('Followee not found');

    const existingFollower = await Followers.findOne({ follower: followerId, followee: followeeId });
    if (existingFollower) {
      await Followers.findByIdAndDelete(existingFollower._id);

      follower.followingCount -= 1;
      await follower.save();
      return null;
    } else {
      const newFollower = new Followers({ follower: followerId, followee: followeeId, createdAt: new Date() });
      await newFollower.save();

      follower.followingCount += 1;
      await follower.save();
      return newFollower;
    }
  } catch (err) {
    throw new Error(err.message);
  }
}