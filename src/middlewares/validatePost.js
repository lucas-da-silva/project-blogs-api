module.exports = (req, res, next) => {
  const propertyRequired = ['title', 'content', 'categoryIds'];
  if (!propertyRequired.every((property) => property in req.body)) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  return next();
};
