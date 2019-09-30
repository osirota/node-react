import Token from '../../lib/Token';
import HttpError from '../../lib/HttpError';

const auth = async (req, _, next) => {
  try {
    const { authorization } = req.headers;
    const user = Token.verify(authorization);
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
    const { authorization } = req.headers;
    const user = Token.verify(authorization, { ignoreExpiration: true });
    req.user = { ...user };
  } catch (err) {
    next(new HttpError(401, 'Unauthorized'));
  }
  await next();
};

module.exports = auth;
