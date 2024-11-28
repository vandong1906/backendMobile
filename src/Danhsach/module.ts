import express from "express";
import {getDanhSach} from "./usecase";
const router = express.Router();
router.get("/",getDanhSach)
export default router;