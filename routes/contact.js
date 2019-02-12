let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to contactSchema model
let contactModel = require('../models/contact');

// Get Contact list - READ

router.get('/', (req,res,next) => {
    contactModel.find((err, contactList) => {
        if(err){
            return console.error(err);
        }else{
            // console.log(contactList);
            res.render('contacts/index', { 
                title: 'Contact List',
                contacts: contactList 
            });
        }
    })
});


router.get('/add', (req,res,next) => {
    res.render('contacts/add', { 
        title: 'Add New Contact'
    });
});

router.post('/add', (req,res,next) => {
    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });
    contactModel.create(newContact, (err, contactModel)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect("/contact-list");
        }
    });
});

module.exports = router;
