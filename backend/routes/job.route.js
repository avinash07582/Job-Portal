
const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middlewares/isAuthenticated');
const { postJob, getAllJobs, getAdminJobs, getJobById } = require('../controllers/job.controller');

router.post("/post",isAuthenticated, postJob);
router.get("/get",isAuthenticated, getAllJobs);
router.get("/getadminjobs",isAuthenticated, getAdminJobs);
router.get("/get/:id",isAuthenticated, getJobById);





module.exports = router;