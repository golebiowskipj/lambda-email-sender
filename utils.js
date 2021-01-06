function isEmail(email) {
  const regExp = /\S+@\S+\.\S+/;
  return regExp.test(email);
}

module.exports = {
  isEmail,
};
