let express = require('express');
let router = express.Router();

let showIndexPage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  };


let showAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
  };

let showServicePage = (req, res, next) => {
    res.render('index', { title: 'Services' });
  };

let showProductPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
  };

let showContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
  };
  

  module.exports = {
      showIndexPage,
      showAboutPage,
      showContactPage, 
      showProductPage,
      showServicePage
  }