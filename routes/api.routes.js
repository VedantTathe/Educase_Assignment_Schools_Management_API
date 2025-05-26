const express = require('express');
const router = express.Router();
const db = require('../config/db');
router.get('/', (req, res) => {
    res.send("<br/><br/><strong><h1>Welcome to School Management API</h1></strong><br/> Following is the endpoints: <br/> 1. Creating\\Adding School <strong>(Method = POST):- /addSchool</strong> <br/>2. Listing all schools (Sorted based on proximity to the user's location) <strong>(Method = GET):- /listSchools </strong>");
})


router.post('/addSchool', (req, res) => {

    console.log(req.body);

    try {

        const { name, address, latitude, longitude } = req.body;

        db.query('insert into school (name, address, latitude, longitude) values (?,?,?,?)', [name, address, latitude, longitude], (err, result) => {
            if (err) {
                console.log("error = ", err);
                return res.status(500).json({ "error": "Database Error" });
            }
        }
        );

        console.log("Successfully added..!");
        return res.send("School Added Successfully")
    }
    catch (err) {
        console.log("Error", err);
        return res.status(400).json({ "error": err });
    }
});





router.get('/listSchools', (req, res) => {

    try {


        db.query('select * from school', (err, result) => {
            if (err) {
                console.log("error = ", err);
                return res.status(500).json({ "error": "Database Error" });
            }

            
            console.log("Successfully Retrived..!");
            return res.status(200).send(result)
        });

    }
    catch (err) {
        console.log("Error", err);
        return res.status(400).json({ "error": err });
    }
});




module.exports = router;
