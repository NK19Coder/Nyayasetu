import express from 'express';
import {
    updateLawyer,
    deleteLawyer,
    getAllLawyer,
    getSingleLawyer
} from "../Controllers/lawyerController.js";
import { authenticate, restrict } from '../auth/verifyToken.js';

import reviewRouter from './review.js';

const router = express.Router();

//nested route
router.use('/:doctorId/reviews', reviewRouter);

router.get("/:id", getSingleLawyer);
router.get("/", getAllLawyer);
router.put("/:id", authenticate, restrict(['lawyer']), updateLawyer);
router.delete("/:id", authenticate, restrict(['lawyer']), deleteLawyer);

export default router;