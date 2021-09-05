import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routers from "./route/route.js"

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect("mongodb+srv://abc:user@123@cluster0.hpdua.mongodb.net/swachhta?retryWrites=true",  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false, useCreateIndex: true })
.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("error");
})



app.use('/api/swachhta', routers)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
