const express = require('express');
const app = express();
const port = 5000;
const mobiles = require('./routes/mobiles')

// middleware
app.use(express.json())

// routes
app.use('/api/v1', mobiles)



try {
    app.listen(port, console.log(`Server is listening on port ${port}...`))
} catch (error) {
    console.log(error);
}


// app.get('/', (req, res) => {
//     res.status(200).json('Home Page')
// })