const create = (req, res, next) => {
  const propertyRequired = ['title', 'content', 'categoryIds'];
  const isValid = propertyRequired.every((property) => property in req.body);
  const { categoryIds } = req.body;

  if (!isValid || !categoryIds.length) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  return next();
};

const update = (req, res, next) => {
  const propertyRequired = ['title', 'content'];
  if (!propertyRequired.every((property) => property in req.body)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  create,
  update,
};
