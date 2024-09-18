import express from "express";
import authMiddleware from "../../middlewares/authMiddleware";
import { followUser } from "./followerController";

const router = express.Router();

router.post('/', authMiddleware, followUser);
