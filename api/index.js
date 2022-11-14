const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
dotenv.config()
mongoose.connect(process.env.v3n4rSH9uXW).then(() => console.log('Connection success')).catch((err) => console.log('There is error', err))

app.listen('3000', () => (console.log('Server is running')))