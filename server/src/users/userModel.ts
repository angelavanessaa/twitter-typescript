import bcrypt from "bcryptjs/dist/bcrypt";
import mongoose, { Document, Schema } from "mongoose";

interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  followingCount: number;
  followersCount: number;
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema: Schema<UserDocument> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  followingCount: { type: Number, default: 0 },
  followersCount: { type: Number, default: 0 },
});

userSchema.methods.comparePassword = async function (password: string) {
  await bcrypt.compare(password, this.password);
}

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
})

const User = mongoose.model("User", userSchema);

export default User;
