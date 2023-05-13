import User from "./user.model";


export const addUserToDB = async () => {
    const user = await new User({
        id: 995,
        role: 'student',
        password: 'abc123',
        name: {
            firstName: 'Mr',
            middleName: 'Test ',
            lastName: '2'
        },
        dateOfBirth: '1 jan 2000',
        gender: "male",
        email: 'rakib@gmail.com',
        contactNo: '017765456451',
        emergencyContactNo: '0154545416',
        presentAddress: 'Dhanmondi, Dhaka',
        permanentAddress: 'Barisal'
    })

    await user.save();
    return user;
}

export const getUsersFromDB = async ()=>{
    const users = await User.find();
    return users;
}