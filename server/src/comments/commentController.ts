import { executeCreateComment } from "./commentService";
import { Request, Response } from "express";

export const createComment = async (req: Request, res: Response) => {
  const { userId, tweetId, comment } = req.body;

  try {
    const newComment = await executeCreateComment(userId, tweetId, comment);
    return res.status(201).send(newComment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}