"use strict"
const data = require("./data");

const members = require("../mongo-models/member");
const PersonalInfo = require("../mongo-models/personalInfo");
const planInfo = require("../mongo-models/planInfo");
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
                // return data.personalInfo.find(personalInfo => personalInfo.id === member.personalInfoId)
                // return personalInfo.find({ id: member.personalInfoId })
                return PersonalInfo.find({ id: 1 })
            }
        },
        planInfo: {
            type: PlanInfoType,
            resolve: (member) => {
                // return data.planInfo.find(planInfo => planInfo.id === member.planInfoId)
                return planInfo.find({
                    id: member.id
                })
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
            type: new GraphQLList(MembersType),
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
            // resolve: () => data.members
            // resolve: () => members.find({})
            resolve: () => services.membersListAll()
        },
        personalInfos: {
            type: new GraphQLList(PersonalInfoType),
            description: "List of Personal Info",
            // resolve: () => data.personalInfo
            // resolve: () => PersonalInfo.find({})
            resolve: () => services.personalInfoListAll()
        },
        planInfos: {
            type: new GraphQLList(PlanInfoType),
            description: "List of Plans",
            // resolve: () => data.planInfo
            // resolve: () => planInfo.find({})
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