import express from "express";
import multer from 'multer';
import {createMusic, getAllMusics} from "./usecase";
import path from "path";
import fs from 'fs';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join( 'src', 'Mp3');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage,  // This specifies where and how to store the uploaded files.
    fileFilter: (req, file, cb) => {   // This is a function that filters which files can be uploaded.
        // Only allow MP3 files
        if (file.mimetype === 'audio/mpeg') {
            cb(null, true);  // Accept the file
        } else {
            cb(null, false);  // Reject the file with an error message
        }
    }
});

const router = express.Router();
router.post('/upload',upload.single('file'),createMusic)
router.get('/',getAllMusics)
export default router;