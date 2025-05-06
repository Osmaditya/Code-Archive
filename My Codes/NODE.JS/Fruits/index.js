// index.js special file hai jo baki files(apple,banana,cherry) ko import krta hai aur export krta hai dusri directory me import krne ke liye
const apple = require("./apple"); //apple.js se data leke aaya
const banana = require("./banana");  //banana.js se data leke aaya
const guava = require("./guava");

let fruits = [apple, banana, guava]; //sari files se data leke array bnao phir export kr do
module.exports = fruits;    //ye export ho jayega dusri directory me import krne ke liye

