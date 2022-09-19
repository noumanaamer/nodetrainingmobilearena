const homePage = async (req, res) => {
    try {
        res.status(200).json('Home Page')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const publicMobiles = async (req, res) => {
    try {
        res.status(200).json('Public Mobiles')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const signUp = async (req, res) => {
    try {
        res.status(200).json('Register yourself')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const logIn = async (req, res) => {
    try {
        res.status(200).json('Log In Page')
    } catch (error) {
        res.status(500).json({msg: error})
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
        res.status(200).json('You can add new mobiles here')
    } catch (error) {
        res.status(500).json({msg: error})
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