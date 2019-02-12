let express = require('express');
let router = express.Router();

let indexController = require('../controller/index');

/* GET home page. */
router.get('/', indexController.showIndexPage);

/* GET About page. */
router.get('/about', indexController.showAboutPage);

/* GET product page. */
router.get('/products', indexController.showProductPage);

/* GET services page. */
router.get('/services', indexController.showServicePage);

/* GET contact page. */
router.get('/Contact', indexController.showContactPage);

module.exports = router;
