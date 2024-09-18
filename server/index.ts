import express from "express";
import config from "dotenv";
import connectDB from "./config/db"
import cors from "cors";
import errorHandler from "./utils/errorHandler";

import userRouter from './src/users/userRoutes';
import tweetRouter from './src/tweets/tweetRoutes';
import likeRouter from './src/likes/likeRoutes';
import commentRouter from './src/comments/commentRoutes';
import retweetRouter from './src/retweets/retweetRoutes';

config.configDotenv();

connectDB();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Health Check
app.get("/health", (_, res) => {
    res.send("Server is running");
});

app.use("/api/auth", userRouter);
app.use("/api/tweets", tweetRouter);
app.use("/api/likes", likeRouter);
app.use("/api/comments", commentRouter);
app.use("/api/retweets", retweetRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
