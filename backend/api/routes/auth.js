import { Router } from 'express';
import Token from '../../lib/Token';
import auth from '../middleware/auth';
import { db } from '../../models'; 


const router = Router();

router.post('/signup', async (req, res, next) => {

    const { email, password } = req.body;
    const { user } = db;
    if (email, password ) {
        const userData = {
            email, 
            password 
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
  try {
    res.json({ ...profile, token: Token.create(profile) });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
