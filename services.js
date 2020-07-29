const PersonalInfo = require("./mongo-models/personalInfo");
const Member = require("./mongo-models/member");
const PlanInfo = require("./mongo-models/planInfo");

const personalInfoListAll = () => {
    console.log("Starting executing personalInfoListAll service");

    const data = PersonalInfo.find({});
    console.log(data);
    console.log("Completed executing personalInfoListAll service");

    return data;

};

const membersListAll = () => {
    console.log("Starting executing membersListAll service");

    const data = Member.find({});
    console.log(data);
    console.log("Completed executing membersListAll service");

    return data;

};

const planInfoListAll = () => {
    console.log("Starting executing planInfoListAll service");

    const data = PlanInfo.find({});
    console.log(data);
    console.log("Completed executing planInfoListAll service");

    return data;

};

const membersFindById = (id) => {
    console.log("Starting executing membersFindById service");

    const data = Member.find({ id: id });
    console.log(data);
    console.log("Completed executing membersFindById service");

    return data;

};

module.exports = {
    personalInfoListAll: personalInfoListAll,
    membersListAll: membersListAll,
    planInfoListAll: planInfoListAll,
    membersFindById: membersFindById
}