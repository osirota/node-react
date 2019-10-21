import jsonwebtoken from 'jsonwebtoken';

const Token = {
  create(user) {
    return jsonwebtoken.sign({ user }, 'JWT.PRIVATE_KEY');
  },
  verify(token, options) {
    console.log(token);

    const { user } = jsonwebtoken.verify(token, 'JWT.PRIVATE_KEY', { ...options });
    return user;
  }
}


export default Token;
