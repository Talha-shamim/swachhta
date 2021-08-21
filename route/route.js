import express from "express";
import { login , signup, points} from '../controller/controller.js'
const router = express.Router();

router.post('/login',login);
router.post('/signup',signup);
router.post('/points/:id',points)

export default router;