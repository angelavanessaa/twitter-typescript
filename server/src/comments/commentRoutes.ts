import express from "express";
import authMiddleware from "../../middlewares/authMiddleware";
import { createComment } from "./commentController";

const router = express.Router();

router.post('/', authMiddleware, createComment);