// primitive

// 7 type= call  by value
//strin, number , boolean,null ,undefined,symbol(uniquie value bananen ke liye use hota hai),BigInt


// javascripts static or dynamic
// not language define in javascript
// Reference (non primitive)
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Array ,objects, Functions

//+++++++++++++++++++++++++++++++++++

// memory are two type stack ,heap
// stack(Primitive)==copy milti ,heap(non primitive)=reference milta hai
let myInstaName="tarun.rajput05"
let anotherName= myInstaName
anotherName ="papakipari"
console.log(anotherName);
console.log(myInstaName)
