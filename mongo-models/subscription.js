const mongo = require('mongoose');
const Schema = mongo.Schema;

const subscriptionSchema = new Schema({
    id: Number,
    contractId: Number,
    coverages: [Number]
});

module.exports = mongo.model('subscription', subscriptionSchema, 'subscription');