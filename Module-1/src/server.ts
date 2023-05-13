import { red, green } from 'console-log-colors';
import mongoose from "mongoose";
const port :number = 5000;
import app from './app';



// database connection
async function main() {
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(green('server connected successfully'));
        app.listen(port, () => {
            console.log(green(`server running on the port ${port}`));
        })

    } catch (err) {
        console.log(red('failed to connect database'), err);
    }
}


main().catch(err => console.log(red(err)));



