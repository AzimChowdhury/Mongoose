import { NextFunction, Request, Response } from "express"
import { addUserToDB } from "./user.services"


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await addUserToDB()

    res.status(200).json({
        status:'success',
        data: user
    })
    next()
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await addUserToDB()

    res.status(200).json({
        status:'success',
        data: user
    })
    next()
}