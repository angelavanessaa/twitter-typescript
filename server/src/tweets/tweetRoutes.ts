import express from "express";
import { getTweets, createTweet } from "./tweetController";
import authMiddleware from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getTweets);
router.post("/", authMiddleware, createTweet);