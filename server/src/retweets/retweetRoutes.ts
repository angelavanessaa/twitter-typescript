import express from "express";
import { executeRetweet } from "./retweetController";
import authMiddleware from "../../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, executeRetweet);

export default router;