import {Request, Response} from "express";
import Music from "../model";
export const createMusic = async (req: Request, res: Response) => {
    const file = req.file;
    console.log(file);
    if (file) {
        res.json(await Music.create({
            name: req.body.name,
            album_id:Number(req.body.album_id),
            destination:file.originalname
        })).status(200);
    } else {
        res.status(400).send('No file uploaded');
    }

};
export const getMusic = async (req: Request, res: Response) => {
    res.json(await Music.findOne({
        where:{
            music_id:req.params,
        }
    }))
}
export const updateMusic = async (req: Request, res: Response) => {
}
export const deleteMusic = async (req: Request, res: Response) => {
}
export const getAllMusics = async (req: Request, res: Response) => {
    res.json(await Music.findAll()).status(200);
}
