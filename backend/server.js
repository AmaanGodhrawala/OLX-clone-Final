const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const authRout = require('../backend/Routes/Auth/Auth');
dotenv.config()
const app = express();
// ============Middleware===========
app.use(cors())
// ============MongoDB configs===========
const mongoURL = process.env.mongoURL
const mongoEss = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(mongoURL,mongoEss,(err)=>{
    if (err){
        return console.log(err);
    }
    return console.log("mongoDB success");
})
//============+Routes entry points=========
app.use(require('./Routes/Auth/Auth'))
app.use(require("./Routes/Upload/Upload"))
app.use(require("./Routes/Fetch/Fetch"))
// ============Server Configs===========
const PORT = process.env.PORT || 7878;
app.listen(PORT, () => {
    console.log("Listening at", PORT);
})