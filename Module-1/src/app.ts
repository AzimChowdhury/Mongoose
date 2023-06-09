import express, { Application}  from "express";
import cors from "cors"; 
const app: Application = express();


// routes
import userRoutes from './app/modules/user/user.route'
import { green } from "console-log-colors";

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1/user', userRoutes)





export default app;