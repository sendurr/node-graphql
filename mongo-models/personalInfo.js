const mongo = require('mongoose');
const Schema = mongo.Schema;

const personalInfoSchema = new Schema({
    id: Number,
    firstName: String,
    middleName: String,
    lastName: String
});

module.exports = mongo.model('personalInfo', personalInfoSchema, 'personalInfo');