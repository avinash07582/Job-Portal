const express = require('express');
const router = express.Router();
const { register, login, updateProfile, logout } = require("../controllers/user.controller");
const isAuthenticated = require('../middlewares/isAuthenticated');
const { singleUpload } = require('../middlewares/multer');

router.post('/register',singleUpload, register)
router.post('/login', login)
 router.get('/logout', logout )
router.post('/profile/update',singleUpload, isAuthenticated, updateProfile)




module.exports = router