let mongoose = require('mongoose');

//create a model class
let gameSchema = mongoose.Schema({
    gameName: String,
    description: String
},
{
    collection: "games"
});

module.exports = mongoose.model('demo', gameSchema);