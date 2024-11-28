// src/index.ts
import express, { Request, Response } from 'express';
import *  as dotenv from 'dotenv';
import user from "../src/user/module";
import dbconfig from "./dbconfig/dbconfig";
import Danhsach from "./Danhsach/module";
import Album from "./Album/module";
import casi from "./casi/module";
import music from "./music/module";
import path from "path";
dotenv.config();
dbconfig.sync();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, "/Mp3")));
app.use('/v1/danhsach',Danhsach);
app.use('/v1/user',user);
app.use('/v1/album',Album);
app.use('/v1/user',casi);
app.use('/v1/music',music);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

