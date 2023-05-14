import { IUser } from "./user.interface";
import User from "./user.model";


export const addUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload)
    // User -> class
    // user -> instance
    // save -> built in instance method
    // console.log(user.fullName());
    await user.save();
    return user;
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: number): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload },{name:1, email:1,contactNo:1})
    return user;
}

export const getAdmins = async () => {
    const admins = await User.getAdmins()
    return admins;
}