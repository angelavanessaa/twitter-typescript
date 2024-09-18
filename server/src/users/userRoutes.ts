import express from "express";
import { login, register } from "./userController";
import validateSchemas from "../../middlewares/validateSchema";
import userSchema from "./userSchemaValidation";

const router = express.Router();

router.post("/login", login);
router.post(
  '/register',
  validateSchemas(userSchema.signUp, 'body'),
  (req, res) => {
    userSchema.signUp(res, req.body);
  }
);

export default router;