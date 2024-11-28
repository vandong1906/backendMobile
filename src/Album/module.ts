import {createAlbum, getAlbum} from "./usecase";

const express = require('express');
const router = express.Router();
router.get('/', getAlbum)
router.post('/', createAlbum);
export default router;