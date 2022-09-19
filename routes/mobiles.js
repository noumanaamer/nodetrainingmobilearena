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
router.route('/signup').get(signUp)
router.route('/login').get(logIn)
router.route('/user').get(user)
router.route('/user/public').get(publicMobiles)
router.route('/user/private').get(privateMobiles)
router.route('/user/addmobiles').get(addMobiles)

module.exports = router
