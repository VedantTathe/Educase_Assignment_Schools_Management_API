const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const db = require('../config/db');
router.get('/', (req, res) => {
    res.send("<br/><br/><strong><h1>Welcome to School Management API</h1></strong><br/> Following is the endpoints: <br/> 1. Creating\\Adding School <strong>(Method = POST):- /addSchool</strong> <br/>2. Listing all schools (Sorted based on proximity to the user's location) <strong>(Method = GET):- /listSchools </strong>");
})


router.post('/addSchool', schoolController.addSchool);

router.get('/listSchools', schoolController.listSchools);

router.delete('/deleteSchool/:id', schoolController.deleteSchool);




module.exports = router;
