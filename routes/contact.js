let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to contactSchema model
let contact = require('../models/contact');

// Get Contact list - READ

router.get('/', (req,res,next) => {
    contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        }else{
            console.log(contactList);
            res.render('contacts/index', { 
                title: 'Contact List',
                contacts: contactList 
            });
        }
    })
});

module.exports = router;
