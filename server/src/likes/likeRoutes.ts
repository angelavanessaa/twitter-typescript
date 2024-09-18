import express from "express";
import authMiddleware from "../../middlewares/authMiddleware";
import { executeLike } from "./likeController";

const router = express.Router();

router.post('/', authMiddleware, executeLike);
