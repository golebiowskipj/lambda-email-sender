const { CORS_HEADERS, ROUTE_NOT_FOUND } = require("../config/lambdaResponse");

const notFoundController = (callback) => {
  callback(null, {
    statusCode: 404,
    headers: CORS_HEADERS,
    body: JSON.stringify({ message: ROUTE_NOT_FOUND }),
  });
};

module.exports = {
  notFoundController,
};
