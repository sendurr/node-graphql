"use strict"

const members = [
    { id: 1, relationShip: "subscriber", personInfo: 1 , subscription: 1 },
    { id: 2, relationShip: "spouse", personInfo: 2 , subscription: 1 },
    { id: 3, relationShip: "child", personInfo: 3 , subscription: 1 },
    { id: 4, relationShip: "subscriber", personInfo: 4 , subscription: 4 }
];

const personInfo = [
    { id: 1, firstName: "Steve", middleName: "", lastName: "Jobs", dob: "01/01/2001", title: "Mr", ssn: "XXXXXXX989" },
    { id: 2, firstName: "Bill", middleName: "H", lastName: "Gates", dob: "01/01/1990", title: "Mr", ssn: "XXXXXXX097" },
    { id: 3, firstName: "Jeff", middleName: "L", lastName: "Bezos", dob: "01/01/1980", title: "Mr", ssn: "XXXXXXX142" },
    { id: 4, firstName: "Elon", middleName: "", lastName: "Musk", dob: "01/01/1964", title: "Mr", ssn: "XXXXXXX501" }
];

const subscription = [
    { id: 1, contractId: 2345, coverages: [1, 5] },
    { id: 2, contractId: 5956, coverages: [2] },
    { id: 3, contractId: 3970, coverages: [3] },
    { id: 4, contractId: 7305, coverages: [4] },
] ;

const coverage = [
    { id: 1, planName: "Delta Care HMO", planCode: "CAA54", issuer: "DELTA", effStrtDt: "01/01/2020", effEndDt: "12/31/2020" },
    { id: 2, planName: "Delta PPO Premium", planCode: "PREMIUM55", issuer: "DELTA", effStrtDt: "01/01/2020", effEndDt: "12/31/2020" },
    { id: 3, planName: "Delta PPO Premium", planCode: "PREMIUM002", issuer: "AARP", effStrtDt: "01/01/2020", effEndDt: "12/31/2020" },
    { id: 4, planName: "Delta PPO  Basic", planCode: "BASIC0001", issuer: "AARP", effStrtDt: "01/01/2020", effEndDt: "12/31/2020" },
    { id: 5, planName: "Costco PPO  Basic", planCode: "COSTC0001", issuer: "COSTCO", effStrtDt: "01/01/2017", effEndDt: "12/31/2017" }
];

module.exports = {
    members: members,
    subscription: subscription,
    coverage: coverage,
    personInfo: personInfo
};