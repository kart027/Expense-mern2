const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const bodyParser = require("body-parser");
const Transcation = require("./models/transcationSchema");
const Router = require("./routes/transcation");
const connect = require("./database/mongodb");
const Router2 = require("./routes/user");
const passport = require("passport")
const passportConfig = require("./config/passport")

const cors = require("cors")
app.use(bodyParser.json())
app.use(cors());
app.use(passport.initialize());
passportConfig(passport);
connect()



// mongodb+srv://kartik:<password>@cluster0.7ecurks.mongodb.net/?retryWrites=true&w=majority



app.use("/",Router)
app.use("/user",Router2)



app.listen(port,()=>{
    console.log("server is running")
})


