const express = require('express');
const router = express.Router();

const {
    homePage,
    publicMobiles,
    signUp,
    logIn,
    user,
    privateMobiles,
    addMobiles
} = require('../controllers/mobiles')

router.route('/').get(homePage);
router.route('/mobiles').get(publicMobiles)
router.route('/signup').post(signUp)
router.route('/login').post(logIn)
router.route('/user').get(user)
router.route('/user/public').get(publicMobiles)
router.route('/user/private').get(privateMobiles)
router.route('/user/addmobiles').post(addMobiles)

module.exports = router
