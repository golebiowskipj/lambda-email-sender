const {
  CORS_HEADERS,
  MISSING_FIELDS,
  MUST_BE_EMAIL,
  SUCESS,
  STH_WENT_WRONG,
} = require("../config/lambdaResponse");
const { sendEmail } = require("../models/sendEmailModel");
const { isEmail } = require("../utils");
const sendEmailController = (req, callback) => {
  const { to, subject, msg } = JSON.parse(req.body);

  if (!to || !subject || !msg) {
    return callback(null, {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: MISSING_FIELDS }),
    });
  } else if (!isEmail(to)) {
    return callback(null, {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: MUST_BE_EMAIL }),
    });
  } else {
    sendEmail(to, subject, msg)
      .then(() => {
        callback(null, {
          statusCode: 200,
          headers: CORS_HEADERS,
          body: JSON.stringify({ message: SUCESS }),
        });
      })
      .catch((err) => {
        callback(null, {
          statusCode: 400,
          headers: CORS_HEADERS,
          body: JSON.stringify({ message: STH_WENT_WRONG, error: err }),
        });
      });
  }
};

module.exports = {
  sendEmailController,
};
