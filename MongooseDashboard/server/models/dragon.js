var mongoose = require('mongoose');

//Database Schemas
var DragonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    size: {type: String},
    fire: {type: String},
    faveFood: {type: String}
},{timestamps: true});
mongoose.model("Dragon", DragonSchema);
var Dragon = mongoose.model("Dragon");
