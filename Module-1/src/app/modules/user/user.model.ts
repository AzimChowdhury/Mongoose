import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from './user.interface';


type UserModel = Model<IUser, {}, IUserMethods>

// schema using interface
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: {
        type: String,
        required: false
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
})

userSchema.method('fullName', function fullName() {
    return this.name.firstName + " " + this.name.middleName + " " + this.name.lastName;
})

const User = model<IUser, UserModel>('User', userSchema);


export default User;