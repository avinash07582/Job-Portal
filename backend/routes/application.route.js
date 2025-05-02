const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middlewares/isAuthenticated');
const { applyJob, getAppliedJobs, getApplicants, updateStatus } = require('../controllers/application.controller');


router.get('/apply/:id', isAuthenticated,applyJob)
router.get('/get', isAuthenticated,getAppliedJobs)
 router.get('/:id/applicants', isAuthenticated,getApplicants )
router.post("/status/:id/update", isAuthenticated, updateStatus)




module.exports = router