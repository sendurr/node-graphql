"use strict"
const data = require("./data");

const {
    GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLList, GraphQLNonNull, GraphQLInt
} = require("graphql");

const MembersType = new GraphQLObjectType({
    name: "Member",
    description: "Member info",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        relationShip: { type: GraphQLNonNull(GraphQLString)},
        personalInfoId: { type: GraphQLNonNull(GraphQLInt)},
        planInfoId: { type: GraphQLNonNull(GraphQLInt)}
    })
});

const PersonalInfo = new GraphQLObjectType({
    name: "PersonalInfo",
    description: "Personal info",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        firstName: { type: GraphQLNonNull(GraphQLString)},
        middleName: { type: GraphQLNonNull(GraphQLString)},
        lastName: { type: GraphQLNonNull(GraphQLString)}
    })
});

const PlanInfo = new GraphQLObjectType({
    name: "planInfo",
    description: "plan  info",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        planName: { type: GraphQLNonNull(GraphQLString)},
        planCode: { type: GraphQLNonNull(GraphQLString)},
        issuer: { type: GraphQLNonNull(GraphQLString)}
    })
});

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        members: {
            type: new GraphQLList(MembersType),
            description: "List of members",
            resolve: () => data.members
        },
        personalInfos: {
            type: new GraphQLList(PersonalInfo),
            description: "List of Personal Info",
            resolve: () => data.personalInfo
        },
        planInfos: {
            type: new GraphQLList(PlanInfo),
            description: "List of Plans",
            resolve: () => data.planInfo
        }
    })
});

const querySchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = {
    querySchema: querySchema
};