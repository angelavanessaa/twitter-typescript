import { NextFunction, Request, Response } from "express";
import userService from "../src/users/userService";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send("Unauthorized");

  try {
    const user = await userService.authenticate(token);
    if (!user) return res.status(401).send("Unauthorized");
    req.body.userId = user._id;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
}

export default authMiddleware;