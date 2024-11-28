import User from "../model/index"
import {Request, Response} from "express";

export const createUser = async function createUser(req: Request, res: Response) {
    try {
        const newUser = await User.create({
            Name:req.body.name,
            password: req.body.password,
        });
        if (newUser) {
            res.status(200).json({
                status: "success",
                message: "Login successful"
            });
        }
        else {
            res.status(400).json({
                status: "error",
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        console.error("Error creating user:", error);   
    }
}
export const getAll = async function all(req: Request, res: Response){
    try {
        res.json(User.findAll()).status(200);
    } catch (err) {
        throw err;
    }
}
export const find = async function findUserById(req: Request, res: Response) {
    try {
        const user = await User.findOne({
            where:{
                Name:req.body.name,
                password:req.body.password
            }
        })
        if (user) {
            res.status(200).json({
                status: "success",
                message: "Login successful"
            });
        } else {
            res.status(400).json({
                status: "error",
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        console.error("Error finding user:", error);
    }
}

