

// import express from the express libary
const express = require('express')
// get the app partion by calling this function of express
const app = express()
//  get the express layouts
const expressLayouts = require('express-ejs-layouts')

// import the index route
const indexRouter = require('./routes/index')

// import dotenv
require('dotenv').config()

// set the view engine as ejs
app.set('view engine', 'ejs')
// set where our views is going to be
app.set('views', __dirname + '/views')
// hookup express layouts
app.set('layout', 'layouts/layout')
// tell express that we gonna use expresslayouts
app.use(expressLayouts)
// tell express were our public files is going to be
app.use(express.static('public'))

// import mongoose 
const mongoose = require('mongoose')

// setup the connection to the DB
mongoose.connect(process.env.DATABASE_URL, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// tell express to use the indexrouter
app.use('/', indexRouter)

// declare what port our app is gonna be on
app.listen(process.env.PORT || 3000)






