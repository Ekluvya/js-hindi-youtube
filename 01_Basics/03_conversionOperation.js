let score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

let score2 = "abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2)

let score3 = null
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);
console.log(typeof valueInNumber3);

let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);
console.log(typeof valueInNumber4);

let isLoggedIn = "Hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => true
// "" => false
// "yash" => true

//****************************Operations***************************
let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion