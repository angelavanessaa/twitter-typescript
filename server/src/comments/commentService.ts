import Comment from './commentModel';
import User from '../users/userModel';
import Tweet from '../tweets/tweetModel';

export const executeCreateComment = async (tweetId: string, authorId: string, content: string) => {
  try {
    const tweet = await Tweet.findOne({ _id: tweetId });
    if (!tweet) throw new Error('Tweet not found');

    const author = await User.findOne({ _id: authorId });
    if (!author) throw new Error('Author not found');

    const comment = new Comment({ tweet: tweetId, author: authorId, content, createdAt: new Date() });
    await comment.save();
    return comment;
  } catch (err) {
    throw new Error(err.message);
  }
}