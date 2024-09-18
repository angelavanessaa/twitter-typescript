const errorHandler = (error, req, res, next) => {
  console.error(error.stacks);
  return res.status(500).send(error.message);
}

export default errorHandler;