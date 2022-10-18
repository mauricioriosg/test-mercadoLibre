const router = require("express").Router();
const authorMiddleware = require("./../../server/middlewares/authorMiddleware");
const {
  responseMiddleware,
  apiCall,
} = require("./../../server/business/items");

router.get("/:id?", authorMiddleware, apiCall, responseMiddleware);

module.exports = router;
