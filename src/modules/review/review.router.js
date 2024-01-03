import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import * as reviewController from "./review.controller.js";
const router = Router({ mergeParams: true });

router.post("/", auth(["User"], reviewController.create));

export default router;
