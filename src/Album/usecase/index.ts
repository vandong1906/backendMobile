import {Request, Response} from "express";
import Album from "../model";

export const createAlbum = async (req: Request, res: Response) => {
    res.json(await Album.create({
        name: req.body.name,
        casi_id: req.body.casi_id,
    }));
}
export const getAlbum = async (req: Request, res: Response) => {
    res.json(await Album.findAll());
}
export const deleteAlbum = async (req: Request, res: Response) => {

}
export const deleteAlbumById = async (req: Request, res: Response) => {
}
export const updateAlbum = async (req: Request, res: Response) => {
}