import User from "./userModel";
import jwt from 'jsonwebtoken'

const register = async (req) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

const login = async (req) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email })
    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid credentials");

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

const authenticate = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { register, login, authenticate };