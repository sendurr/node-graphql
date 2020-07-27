"use strict"

const members = [
    { id: 1, relationShip: "subscriber", personalInfoId: 1 , planInfoId: 1 },
    { id: 2, relationShip: "spouse", personalInfoId: 2 , planInfoId: 2 },
    { id: 3, relationShip: "child", personalInfoId: 3 , planInfoId: 2 },
    { id: 4, relationShip: "subscriber", personalInfoId: 4 , planInfoId: 1 }
];

const personalInfo = [
    { id: 1, firstName: "Steve", middleName: "", lastName: "Jobs" },
    { id: 2, firstName: "Bill", middleName: "H", lastName: "Gates" },
    { id: 3, firstName: "Jeff", middleName: "L", lastName: "Bezos" },
    { id: 4, firstName: "Elon", middleName: "", lastName: "Musk" }
];

const planInfo = [
    { id: 1, planName: "Delta Care HMO", planCode: "CAA54", issuer: "DELTA" },
    { id: 2, planName: "Delta PPO Premium", planCode: "PREMIUM55", issuer: "DELTA" },
    { id: 3, planName: "Delta PPO Premium", planCode: "PREMIUM002", issuer: "AARP" },
    { id: 4, planName: "Delta PPO  Basic", planCode: "BASIC0001", issuer: "AARP" }
];

module.exports = {
    members: members,
    personalInfo: personalInfo,
    planInfo: planInfo
};