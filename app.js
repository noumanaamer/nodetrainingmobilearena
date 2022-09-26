const express = require('express');
// import express from 'express'
const app = express();
const port = 5000;
const mobiles = require('./routes/mobiles');
// const sqlite3 = require(sqlite3).verbose();
// import sqlite3 from 'sqlite3'

// import sqlite3 from 'sqlite3'
// const sqlite3 = require('sqlite3')
// import { open } from 'sqlite'
// const {open} = require('sqlite')

// const dbPromise = open ({
//   filename: 'data.db',
//   driver: sqlite3.Database
// })

const dbPromise = require('./sqlite3/sqlite')



// middleware
app.use(express.json())

// routes
app.use('/api/v1', mobiles)


// app.get('/public', async (req, res) => {
//     const db = await dbPromise;
//     const publicMobiles = await db.all('SELECT * FROM Mobile WHERE isprivate == false;')
//     console.log(publicMobiles)
//     res.status(200).json({publicMobiles})
// })

const setup = async () => {
    const db = await dbPromise
    await db.migrate()
    app.listen(port, console.log(`Server is listening on port ${port}...`))
}

setup()


// app.get('/', (req, res) => {
//     res.status(200).json('Home Page')
// })