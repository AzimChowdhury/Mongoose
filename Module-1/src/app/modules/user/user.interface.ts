import { HydratedDocument, Model } from "mongoose";




// interface
export interface IUser {
    id: number;
    role: 'student';
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    }
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}

// instance Method
export interface IUserMethods {
    fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdmins(): Promise<HydratedDocument<IUser, IUserMethods>>
}