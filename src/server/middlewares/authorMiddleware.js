const authorMiddleware = (req, res, next) => {
  res.author = {
    name: 'Mauricio',
    lastname: 'Rios'
  };
  next();
};

module.exports = authorMiddleware;
