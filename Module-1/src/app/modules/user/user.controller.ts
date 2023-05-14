import { NextFunction, Request, Response } from "express"
import { addUserToDB,getAdmins, getUsersFromDB, getUserByIdFromDB } from "./user.services"


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await addUserToDB(data)

    res.status(200).json({
        status: 'success',
        data: user
    })
    next()
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB()

    res.status(200).json({
        status: 'success',
        data: user
    })
    next()
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; 
    const user = await getUserByIdFromDB(parseInt(id))

    res.status(200).json({
        status: 'success',
        data: user
    })
    next() 
}

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    const admins = await getAdmins()

    res.status(200).json({
        status: 'success',
        data: admins
    })
    next()
}