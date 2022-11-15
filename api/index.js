const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
dotenv.config()
mongoose.connect(process.env.v3n4rSH9uXW).then(() => console.log('DB Connection success')).catch((err) => console.log('There is error with DB connection', err))

app.get('/api', (res, req) =>{
    res = 'dwad'
})

app.listen('5000', () => (console.log('Server is running')))