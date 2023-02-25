import express from 'express';
import cors from 'cors'
import { connection } from './dbconnection.js';
import router from './route/route.js';
import dotenv from 'dotenv';


const app=express();

dotenv.config();
app.use(cors());
app.use(express.json())
app.use("/",router)

const PORT=process.env.PORT || 8000;
const URL=process.env.MONGODB_URI || "mongodb+srv://rraj:12345@cluster0.q3npbsz.mongodb.net/?retryWrites=true&w=majority"
connection(URL);

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
}

app.listen(PORT,()=>{
    console.log(`Listen at PORT ${PORT}`);
})