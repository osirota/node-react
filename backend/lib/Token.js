import jsonwebtoken from 'jsonwebtoken';

const Token = {
  create(user) {
    return jsonwebtoken.sign({ user }, 'JWT.PRIVATE_KEY');
  },
  verify(token, options) {

    const { user } = jsonwebtoken.verify(token, 'JWT.PRIVATE_KEY', { ...options });
    return user;
  }
}


export default Token;
