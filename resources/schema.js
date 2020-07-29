"use strict"
const data = require("./data");
const services = require("../services");

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
        planInfoId: { type: GraphQLNonNull(GraphQLInt)},
        personalInfo: {
            type: PersonalInfoType,
            resolve: (member) => {
                return services.personalInfoFindById(member.personalInfoId)
            }
        },
        planInfo: {
            type: PlanInfoType,
            resolve: (member) => {
                return services.planInfoInfoFindById(member.planInfoId)
            }
        }
    })
});

const PersonalInfoType = new GraphQLObjectType({
    name: "PersonalInfo",
    description: "Personal info",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        firstName: { type: GraphQLNonNull(GraphQLString)},
        middleName: { type: GraphQLNonNull(GraphQLString)},
        lastName: { type: GraphQLNonNull(GraphQLString)}
    })
});

const PlanInfoType = new GraphQLObjectType({
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
        member: {
            type: MembersType,
            description: "Returns a member",
            args: {
                id: { type: GraphQLInt }
            },
            // resolve: (parent, args) => data.members.find(member => member.id === args.id)
            resolve: (parent, args) => services.membersFindById(args.id)
        },
        members: {
            type: new GraphQLList(MembersType),
            description: "List of members",
            resolve: () => services.membersListAll()
        },
        personalInfos: {
            type: new GraphQLList(PersonalInfoType),
            description: "List of Personal Info",
            resolve: () => services.personalInfoListAll()
        },
        planInfos: {
            type: new GraphQLList(PlanInfoType),
            description: "List of Plans",
            resolve: () => services.planInfoListAll()
        }
    })
});

const querySchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = {
    querySchema: querySchema
};