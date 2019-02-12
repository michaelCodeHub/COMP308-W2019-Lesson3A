let express = require('express');
let router = express.Router();

//create reference to contactSchema model
let contactModel = require('../models/contact');

let displayContactList = (req,res,next) => {
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
    })};

let addNewPage =  (req,res,next) => {
    res.render('contacts/add', { 
        title: 'Add New Contact'
    });
};

let addNewContact = (req,res,next) => {
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
};

let editContactPage = (req,res,next) => {
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
};

let editContact = (req,res,next) => {
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
};

let deleteContact = (req,res,next) => {
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
};

module.exports = {
    displayContactList,//getting all the contacts
    addNewPage,//redirting to add page
    addNewContact,//adding a new contact
    editContactPage,//redriect to edit page
    editContact,//update a contact
    deleteContact//delete a contact
}