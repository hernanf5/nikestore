require('dotenv').config();
const passport = require('passport');
const express = require('express');
// require('./config/database');
const cors = require('cors');
// const Router = require('./routes/routes');
const app = express();
const path = require('path');

if (process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname+'client/build/index.html'))
    })
}

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
// app.use('/api', Router)
app.listen(process.env.PORT||4000, process.env.HOST||'0.0.0.0',()=>console.log('server listening'))

