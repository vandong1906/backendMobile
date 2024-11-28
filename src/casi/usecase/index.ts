
import {Request,Response} from "express";
import casi from "../model";

export const createCasi=async (req:Request, res:Response) => {
    res.json(await casi.create({
        Name: req.body.name,
    }));
}
export const deleteCasi=async (req:Request, res:Response) => {}
export const updateCasi=async (req:Request, res:Response) => {}
export const getCasi=async (req:Request, res:Response) => {
    res.json(await casi.findAll()).status(200);
}
