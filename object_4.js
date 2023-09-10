"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
var loginUser = function (user) {
    return user;
};
var user = { name: "Sorabh Kumar", isPaid: true, age: 18 };
var newUser = { name: "Kallue", age: 22 };
createUser(user); // this not giving Error
loginUser(user); // this also not giving error because we pass all the fields as mentioned in type
