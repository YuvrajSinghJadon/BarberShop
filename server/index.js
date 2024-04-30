import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import db from '../server/database/db.js'
import userRoutes from '../server/routes/user.routes.js'
dotenv.config();

const app = express();

//middleware
app.use(express.json());


const PORT = process.env.PORT || 3000;

//database connection
db();

//routes
app.use('/api/v1', userRoutes);

app.get('/', (req,res) => res.send("this is homepage for backend server. Hellooooo"))

app.listen(PORT,() => 
{
    console.log("this is backend working seamlessly AT PORT : ", PORT)
})