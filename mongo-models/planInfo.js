const mongo = require('mongoose');
const Schema = mongo.Schema;

const planInfoSchema = new Schema({
    id: Number,
    planName: String,
    planCode: String,
    issuer: String
});

module.exports = mongo.model('planInfo', planInfoSchema, 'planInfo');