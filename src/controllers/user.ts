import { Request, Response } from "express";

const getAll = async (req:Request, res: Response) => {
    res.send('Welcome to All');
};


export {
    getAll,
}