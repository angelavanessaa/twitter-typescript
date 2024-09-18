import express from "express";
import config from "dotenv";
import connectDB from "./config/db";
import cors from "cors";
import errorHandler from "./utils/errorHandler";

config.configDotenv();

connectDB();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use("/api/auth", require("./src/users/userRoutes"));
app.use("/api/tweets", require("./src/tweets/tweetRoutes"));
app.use("/api/likes", require("./src/likes/likeRoutes"));
app.use("/api/comments", require("./src/comments/commentRoutes"));
app.use("/api/retweets", require("./src/retweets/retweetRoutes"));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 5000");
})
