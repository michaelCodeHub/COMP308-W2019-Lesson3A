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


router.get('/edit/:id', (req,res,next) => {
    let id = req.params.id;
    contactModel.findById(id, (err, contactObject) => {

        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            console.log(contactObject);
            res.render('contacts/edit', { 
                title: 'Edit Contact',
                contact : contactObject
            });
        }
    });
});


router.post('/edit/:id', (req,res,next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });
    contactModel.update( {_id:id} , updatedContact, (err, contactModel)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect("/contact-list");
        }
    });
});


router.get('/delete/:id', (req,res,next) => {
    let id = req.params.id;

    contactModel.remove( {_id:id} , (err, contactModel)=>{
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
