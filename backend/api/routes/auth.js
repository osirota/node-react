import { Router } from 'express';
import Token from '../../lib/Token';
import auth from '../middleware/auth';
import { user } from '../../models'; 


const router = Router();

router.post('/signin', async (req, res, next) => {

    const { email, password } = req.body;

    if (email, password ) {
        const userData = {
            email, 
            password 
        }
        user.create(userData, function (err, user) {
          if (err) {
            return next(err)
          } else {
            res.json({ ...user, token: Token.create(user) });
            return res.redirect('/api/department');
          }
        });
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    res.json({ ...profile, token: Token.create(profile) });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
