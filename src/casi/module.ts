import express from "express";
import {getCasi} from "./usecase";
const router = express.Router();
router.get("/", getCasi)
export default router;