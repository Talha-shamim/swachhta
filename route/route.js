import express from "express";
import { login , signup, points, mail, rateInc, rateCount} from '../controller/controller.js'
const router = express.Router();

router.post('/login',login);
router.post('/signup',signup);
router.post('/points/:id',points);
router.post('/mail',mail);
router.post('/rateInc',rateInc);
router.get('/rateCount',rateCount);

export default router;