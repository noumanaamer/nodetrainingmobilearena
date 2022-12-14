const dbPromise = require('../sqlite3/sqlite')


const homePage = async (req, res) => {
    try {
        res.status(200).json('Home Page')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const publicMobiles = async (req, res) => {
    try {
        const db = await dbPromise;
        const publicPhones = await db.all('SELECT * FROM Mobile WHERE isprivate == false;')
        res.status(200).json(publicPhones)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const signUp = async (req, res) => {
    try {
        const db = await dbPromise;
        const username = req.body.username
        const fullname = req.body.fullname
        const email = req.body.email
        const phone = req.body.phone
        const password = req.body.password

        const {BadRequestError} = require('../errors')

        if (!username || !password) {
            throw new BadRequestError('Please provide username and password.')
            // res.status(400).json('Please provide username and password.')
        }
    
        // await db.run(
        //     'INSERT INTO User(username) VALUES (?);', username)

        await db.run(
            'INSERT INTO User(username, fullname, email, phone, password) VALUES (?, ?, ?, ?, ?);', username, fullname, email, phone, password)
        console.log('Ok Done')
        res.status(201).json('Ok Done')
    } catch (error) {
        res.status(500).json({msg: error})
        console.log(error);

    }
}





const logIn = async (req, res) => {

    // const sqlite3 = require('sqlite3').verbose();

    // let dbdb = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    //     if (err) {
    //         console.error(err.message);
    //     }
    //     else{
    //         console.log('Connected to the data database.');
    //     }
        
    // });

    try {
        const db = await dbPromise;
        const username = req.body.username
        const password = req.body.password

        console.log(username)
        console.log(password);

        let sql = db.all('SELECT username FROM User WHERE username == ? AND password == ?', username, password)
        const user = (await sql).toString()
        console.log(user)
        if (user.length > 0) {
            res.status(201).json('You are a registered user.')
        }

        else {
            res.json('Wrong Credentials')
        }

        // var sql = await db.run('SELECT * FROM User WHERE username = ? AND password = ?', username, password)
        // console.log(sql)

        
        

        // if (username && password) {
        //     connection.query('SELECT * FROM User WHERE username = ? AND password = ?', [username, password], 
        //     function (error, results, field) {
        //         if (error) throw error;
        //         if (results.length > 0) {
        //             res.status(201).json('You are a registered user.')
        //         }
        //         else{
        //             res.send('Incorrect')
        //         }
        //     })
        // }

        // await db.run('INSERT INTO User(username, password) VALUES (?, ?)', username, password)
        
    } catch (error) {
        res.status(500).json({msg: error})
        console.log(error)
    }
}

const user = async (req, res) => {
    try {
        res.status(200).json('Home Page for registered user')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const privateMobiles = async (req, res) => {
    try {
        res.status(200).json('Private Mobiles')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const addMobiles = async (req, res) => {
    try {
        const db = await dbPromise;
        const name = req.body.name
        const detail = req.body.detail
        const public = req.body.public
        const private = req.body.private
        await db.run(
            'INSERT INTO Mobile(title, detail, public, isprivate) VALUES (?, ?, ?, ?);', name, detail, public, private)
        console.log('Ok Done')
        res.status(201).json('Ok Done')
        // res.status(200).json('Ok Done')
    } catch (error) {
        res.status(500).json({msg: error})
        console.log(error)  
    }
}


module.exports = {
    homePage,
    publicMobiles,
    signUp, 
    logIn,
    user, 
    privateMobiles,
    addMobiles
}