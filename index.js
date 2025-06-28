const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");


const app = express();
const mongoURL = process.env.MONGODB_URL;

async function main(){
    await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected"))
.catch((err) => console.error("Connection error: ", err));
    app.listen(3000);
}

const { userModel } = require("./db");

const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

main();