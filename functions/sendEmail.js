require("dotenv").config();
const { notFoundController } = require("../controllers/notFoundController");
const { sendEmailController } = require("../controllers/sendEmailController");

exports.handler = function (event, _, callback) {
  // "routing"
  switch (event.httpMethod) {
    case "POST":
      sendEmailController(event, callback);
      break;
    default:
      notFoundController(callback);
  }
};
