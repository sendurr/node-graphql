const mongo = require('mongoose');
const Schema = mongo.Schema;

const personInfoSchema = new Schema({
    id: Number,
    firstName: String,
    middleName: String,
    lastName: String,
    dob: String,
    title: String,
    ssn: String
});

module.exports = mongo.model('personInfo', personInfoSchema, 'person');