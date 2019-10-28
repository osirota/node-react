import { Router } from 'express';
import bcrypt from 'bcrypt';
import Token from '../../lib/Token';
import auth from '../middleware/auth';
import { db } from '../../models'; 


const router = Router();

router.post('/signup', async (req, res, next) => {

    const { email, password } = req.body;
    const { user } = db;
    if (email, password ) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const userData = {
            email, 
            password: hashedPassword
        }
        user.create(userData, function (err, newUser) {
          if (err) {
            res.status(404).json({ err });
          } else {
            const token = Token.create(newUser);
            return res.cookie('token', token).redirect('/api/department')
          }
        });
  }
});

router.post('/signin', async (req, res, next) => {
    const { email, password } = req.body;
    const { user } = db;
    if (email, password ) {
        const userData = {
            email,
        }
        user.findOne(userData, function (err, newUser) {
          const isCompare = bcrypt.compareSync(password, newUser.password)
          if (err || !newUser || !isCompare) {
            res.status(404).json({ err });
          } else {
            const token = Token.create(newUser);
            return res.cookie('token', token).redirect('/api/department')
          }
        });
  }
});

router.get('/logout', async (req, res, next) => {
    const { token } = req.cookies;
    if(token) {
      res.clearCookie('token').redirect('/signin')
    } else {
      res.status(400).json({ daun: 'daun' })
    }
});
module.exports = router;
