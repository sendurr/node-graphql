"use strict"
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = {
    querySchema: new GraphQLSchema({
        query: new GraphQLObjectType({
            name: "home",
            fields: () => ({
                message: {
                    type: GraphQLString,
                    resolve: () => "Welcome to GraphQl"
                }
            })
        })
    })
}