const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middlewares/isAuthenticated');
const { registerCompnay, getCompany, getCompanyById, updateCompany } = require('../controllers/company.controller');
const { singleUpload } = require('../middlewares/multer');

router.post('/register', isAuthenticated,registerCompnay)
router.get('/get', isAuthenticated,getCompany)
 router.get('/get/:id', isAuthenticated,getCompanyById )
router.put("/update/:id", isAuthenticated,singleUpload ,updateCompany)




module.exports = router