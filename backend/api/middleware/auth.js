import Token from '../../lib/Token';
import HttpError from '../../lib/HttpError';

const auth = async (req, _, next) => {
  try {
    const { token } = req.cookies;
    const user = Token.verify(token);
    req.user = { ...user };
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      next(new HttpError(419, 'Token Expired Error'));
    }
    next(new HttpError(401, 'Unauthorized'));
  }
  await next();
};

auth.expired = async (req, _, next) => {
  try {
    const { token } = req.cookies;
    const user = Token.verify(token);
    req.user = { ...user };
  } catch (err) {
    next(new HttpError(401, 'Unauthorized'));
  }
  await next();
};

module.exports = auth;
