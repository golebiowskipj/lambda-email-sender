const MISSING_FIELDS =
  "Some fields are missing (to, subject, msg are required)";
const MUST_BE_EMAIL = "Email field must contain a valid email address";
const SUCESS = "Email send sucessfully";
const STH_WENT_WRONG = "Something went wrong";
const ROUTE_NOT_FOUND = "Route not found";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};

module.exports = {
  CORS_HEADERS,
  MISSING_FIELDS,
  MUST_BE_EMAIL,
  ROUTE_NOT_FOUND,
  SUCESS,
  STH_WENT_WRONG,
};
