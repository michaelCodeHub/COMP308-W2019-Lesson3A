let express = require('express');
let router = express.Router();

let contactController = require('../controller/contact');

// Get Contact list - READ

router.get('/', contactController.displayContactList);

// Adding a contact
router.get('/add', contactController.addNewPage);
router.post('/add', contactController.addNewContact);

// Edit a contact
router.get('/edit/:id', contactController.editContactPage);
router.post('/edit/:id', contactController.editContact);

// delete a contact
router.get('/delete/:id', contactController.deleteContact);


module.exports = router;
