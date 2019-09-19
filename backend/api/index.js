import { Router } from 'express';
import bodyParser from 'body-parser';

import errors from './middleware/errors';
import personal from "./routes/personal";
import department from "./routes/department";

const router = Router();

router.use(bodyParser.json());


router.use('/personal', personal);
router.use('/department', department);

router.use(errors);


export default () => router;
