import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';

const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

connectDB();


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))


app.listen(PORT , ()=>{
    console.log(`Server is now running on port: ${PORT}`)
})
