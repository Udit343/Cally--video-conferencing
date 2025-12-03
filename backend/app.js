import express from "express";

import mongoose from "mongoose";

import { createServer } from "node:http";

import cors from "cors";

import {connectToSocket} from "./src/controllers/socketManager.js";

import userRoutes from "./src/routes/users.routes.js";


const app=express();

const server=createServer(app);

const io= connectToSocket(server);





app.set("port", (process.env.PORT || 8000));




app.use(cors())

app.use(express.json({limit:"40kb"}));

app.use(express.urlencoded({limit:"40kb", extended:true}));


app.use("/api/v1/users",userRoutes);





const start=async ()=>{

    const connectionDb = await mongoose.connect("mongodb+srv://uditpandit343_db_user:tidu54321@cluster0.4jwvffn.mongodb.net/");

    console.log(`MONGO Connected Db Host ${connectionDb.connection.host}`)

    server.listen(app.get("port"),()=>{
        
    console.log(`Server running on port ${app.get("port")}`);

})
}

start();