import express from "express";
import {createUser, find, getAll} from "./usecase/index";

const router = express.Router();
router.post("/login",find);
router.post("/register",createUser);
export default router