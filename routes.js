"use strict"
const { graphqlHTTP } = require('express-graphql');
const { querySchema } = require('./resources/schema');

module.exports = {
    getRoutes: (app) => {
        app.use('/member-search', graphqlHTTP({
            schema: querySchema,
            graphiql: true
        }));
    }
};