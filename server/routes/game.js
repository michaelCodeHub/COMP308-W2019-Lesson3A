let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to contactSchema model
let game = require('../models/game');

// Get Contact list - READ

router.get('/', (req,res,next) => {
    console.log("Michael");
    game.find((err, gamesList) => {
        if(err){
            return console.error(err);
        }else{
            console.log(gamesList);
            res.render('games/index', { 
                title: 'My Faveurite Games List',
                games: gamesList 
            });
        }
    })
});

module.exports = router;
