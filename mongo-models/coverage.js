const mongo = require('mongoose');
const Schema = mongo.Schema;

const coverageSchema = new Schema({
    id: Number,
    contractId: Number,
    planName: String,
    planCode: String,
    issuer: String,
    effStrtDt: String,
    effEndDt: String
});

module.exports = mongo.model('coverage', coverageSchema, 'coverage');