"use strict";
// Basic Types
let id = 5;
let fisrtName = 'Amin';
let isPublished = true;
let x = 5;
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'hi', true];
// Tuple
let person = [30, 'Amin', true];
//Tuple Array
let employee;
employee = [
    [1, 'Amin'],
    [2, 'John'],
    [3, 'Jane'],
];
//Union
let pid;
pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Left);
// Objects
const user = {
    id: 1,
    name: 'Amin'
};
const user2 = {
    id: 1,
    name: 'Amin'
};
// Type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
// Void
function log(message) {
    console.log(message);
}
log("message");
const userInt = {
    id: 1,
    name: 'Amin'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    registered() {
        return `${this.name} is registered`;
    }
}
const amin = new Person(1, 'Amin Mirzapour');
const hidi = new Person(2, 'Hidi Ghafouri');
console.log(amin.registered());
console.log(amin, hidi);
//subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(1, 'Akbar', 'Manager');
console.log(emp1);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(['ashtar', 'akbar', 'asghar']);
// numArray.push('s')
