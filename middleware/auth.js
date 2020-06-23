const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // get token from header
  const token = req.header('x-auth-token');

  // Check for tokrn
  if (!token) {
    return res.status(401).json({ msg: 'Athorization denied' });
  }
  //Verify
  try {
    const decoder = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoder.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'No valid token' });
    console.log(error);
  }
};
