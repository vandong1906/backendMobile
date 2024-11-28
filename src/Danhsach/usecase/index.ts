import {Request,Response} from "express";
import Danhsach from "../model";
export const createDanhSach=async(req:Request, res:Response) => {

}
export const getDanhSach=async(req:Request, res:Response) => {
     res.json(Danhsach.findAll()).status(200);
}
export const getDanhsach=async(req:Request, res:Response) => {}
export const updateDanhSach=async(req:Request, res:Response) => {}
