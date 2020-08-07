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
        personInfo: {
            type: PersonInfoType,
            resolve: (member) => {
                return services.personInfoFindById(member.personInfo)
            }
        },
        subscription: {
            type: subscriptionType,
            resolve: (member) => {
                return services.subscriptionFindById(member.subscription)
            }
        }
    })
});

const PersonInfoType = new GraphQLObjectType({
    name: "personInfo",
    description: "Person info",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        firstName: { type: GraphQLNonNull(GraphQLString)},
        middleName: { type: GraphQLNonNull(GraphQLString)},
        dob: { type: GraphQLNonNull(GraphQLString)},
        title: { type: GraphQLNonNull(GraphQLString)},
        ssn: { type: GraphQLNonNull(GraphQLString)}
    })
});

const subscriptionType = new GraphQLObjectType({
    name: "subscription",
    description: "subscription",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        contractId: { type: GraphQLNonNull(GraphQLInt)},
        coverages: {
            type: new GraphQLList(coverageType),
            resolve: (subscription) => {
                return services.coverageFindByManyId(subscription.coverages)
            }
        }
    })
});

const coverageType = new GraphQLObjectType({
    name: "coverageInfo",
    description: "coverage",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        planName: { type: GraphQLNonNull(GraphQLString)},
        planCode: { type: GraphQLNonNull(GraphQLString)},
        issuer: { type: GraphQLNonNull(GraphQLString)},
        effStrtDt: { type: GraphQLNonNull(GraphQLString)},
        effEndDt: { type: GraphQLNonNull(GraphQLString)}
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
        // members: {
        //     type: new GraphQLList(MembersType),
        //     description: "List of members",
        //     resolve: () => services.membersListAll()
        // },
        // personalInfos: {
        //     type: new GraphQLList(PersonalInfoType),
        //     description: "List of Personal Info",
        //     resolve: () => services.personalInfoListAll()
        // },
        // planInfos: {
        //     type: new GraphQLList(PlanInfoType),
        //     description: "List of Plans",
        //     resolve: () => services.planInfoListAll()
        // }
    })
});

const querySchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = {
    querySchema: querySchema
};