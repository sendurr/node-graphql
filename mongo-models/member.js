const mongo = require('mongoose');
const Schema = mongo.Schema;

const memberSchema = new Schema({
    id: Number,
    relationShip: String,
    personInfo: Number,
    subscription: Number
});

module.exports = mongo.model('member', memberSchema, 'member');