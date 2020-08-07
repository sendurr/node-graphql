const Person = require("./mongo-models/person");
const Member = require("./mongo-models/member");
const Subscription = require("./mongo-models/subscription");
const Coverage = require("./mongo-models/coverage");

const personalInfoListAll = () => {
    console.log("Starting executing personalInfoListAll service");

    const data = PersonalInfo.find({});

    console.log("Completed executing personalInfoListAll service");

    return data;

};

const membersListAll = () => {
    console.log("Starting executing membersListAll service");
    try {
        const data = Member.find({});
        console.log("Completed executing membersListAll service");
        return data;
    } catch(e) {
        console.log(e);
        return {}
    }

};

const planInfoListAll = () => {
    console.log("Starting executing planInfoListAll service");

    const data = PlanInfo.find({});

    console.log("Completed executing planInfoListAll service");

    return data;

};

const membersFindById = (id) => {
    console.log("Starting executing membersFindById service");
    try {
        const data = Member.findOne({ id: id });
        console.log("Completed executing membersFindById service");
        return data;
    } catch(e) {
        console.log(e);
        return {}
    }

};

const personInfoFindById = (id) => {
    console.log("Starting executing personInfoFindById service");

    const data = Person.findOne({ id: id });

    console.log("Completed executing personInfoFindById service");

    return data;

};

const subscriptionFindById = (id) => {
    console.log("Starting executing subscriptionFindById service");

    const data = Subscription.findOne({ id: id });

    console.log("Completed executing subscriptionFindById service");

    return data;

};

const coverageFindByManyId = (ids) => {
    console.log("Starting executing coverageFindByManyId service");

    const data = Coverage.find({id: {$in: ids } });

    console.log("Completed executing coverageFindByManyId service");

    return data;

};

module.exports = {
    personalInfoListAll: personalInfoListAll,
    membersListAll: membersListAll,
    planInfoListAll: planInfoListAll,
    membersFindById: membersFindById,
    personInfoFindById: personInfoFindById,
    subscriptionFindById: subscriptionFindById,
    coverageFindByManyId: coverageFindByManyId
}