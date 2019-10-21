import { Router } from 'express';
import bodyParser from 'body-parser';

import errors from './middleware/errors';
import personal from "./routes/personal";
import department from "./routes/department";
import auth from "./routes/auth";

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

router.use('/personal', personal);
router.use('/department', department);
router.use('/auth', auth);



export default router;
