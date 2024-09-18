import userServices from './userService';

export const register = async (req, res) => {
  try {
    const user = await userServices.register(req);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export const login = async (req, res) => {
  try {
    const user = await userServices.login(req);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
