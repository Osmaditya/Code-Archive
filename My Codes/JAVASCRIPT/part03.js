// //  STRING METHODS = stringname.method()

// 1)string.trim() = remove white spaces from both sides of a string (returns new trimmed string)

// let password = prompt("Enter your password");
// pass = password.trim();
// console.log(pass );
// console.log("original string " ,password);

// STRINGS ARE IMMUTABLE IN JAVA

// 2) string.toUpperCase() & string.toLowerCase()
let str = "valuable";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//  3) stringname.indexof(substring) = returns first occurance of substring
let name = "Logistics"
console.log(name.indexOf("o"))  //1
console.log(name.indexOf("c"))  //7
console.log(name.indexOf("Y"))  //-1

// METHOD CHAINING = yani ki ek se jada method ham ek line me link krr skte hiai
// agr multiple method apply krne hai to bss . lagake age agle mehtod ko likh skte haii (L -->R compute honge)
let string ="          Leetcode";
console.log(string.trim().toUpperCase());

//  4) REPLACE
name = "Logistics"
console.log(name.replace("stics","cal"));

// 5)REAPEAT
let s = "Warehouse";
console.log(s.repeat(3));

// *******************  ARRAYS  ***************************************************************

let student = ["abhishek","dhruv","shivam"];
console.log(student);       //(3) ['abhishek', 'dhruv', 'shivam']
console.log(student[2]);    //shivam
console.log(typeof(student))    //object

// MIXED ARRAy

let info = ["aman",23,6.1];
console.log(info.length);   //3
console.log(info[0][0]); //a

// ARRAYS ARE MUTABLE IN JAVA
let fruits = ["apple","banana","cherry"];
fruits[9]="guava";
console.log(fruits);

//ARRAY METHODS

let arr = ["Shikhar","Rohit","Pandaya","Raina"];

//PUSH      add to end
arr.push("Yuvraj");
console.log(arr);

//POP       delete from end & return it
let popped = arr.pop();
console.log(arr);
console.log(popped);

//Unshift      add to start
arr.unshift("MSD");
console.log(arr);

//Shift     delete from start & return it
let removed = arr.shift();
console.log(arr); 
console.log(removed);

//indexOf() retruns index of something
console.log(arr.indexOf("Rohit"));

// includes()   search for a value (true/false)
console.log(arr.includes("Rohit"));  //true
console.log(arr.includes("Bhuvi"));  //false

//concat
let arr2 =["bumrah","shami"];
console.log(arr.concat(arr2));  //(6) ['Shikhar', 'Rohit', 'Pandaya', 'Raina', 'bumrah', 'shami']
console.log(arr);   //no change in original arr (4) ['Shikhar', 'Rohit', 'Pandaya', 'Raina']

//reverse
console.log(arr2.reverse());
console.log(arr2);  //changes original array also

//slice
console.log(arr.slice(1,3)) //(2) ['Rohit', 'Pandaya']
console.log(arr.slice(1))   //(3) ['Rohit', 'Pandaya', 'Raina']
console.log(arr.slice(-2)) // last ke do element print krr dega (2) ['Pandaya', 'Raina']

// SPLICE(ye similiar hai slice ki tarah hai ye element ko remove krta hia lekin ye original array ko bhi change krr deta hai )
colors = ["red","blue","pink","purple","lime","brown"];
console.log(colors.splice(4))       //lime brown
console.log(colors)     //(4) ['red', 'blue', 'pink', 'purple']

console.log(colors.splice(0,1));    //['red']
console.log(colors);    //(3) ['blue', 'pink', 'purple']

colors.splice(0,1,'black','gray');  //(3) ['blue', 'pink', 'purple']
console.log(colors);    //(4) ['black', 'gray', 'pink', 'purple']

// SORT()
let cars = ["Bugati","farrari","lambo","BMW"];
console.log(cars.sort());
console.log(cars);  //changes in original array

let num = [1,2,3,100,34,56];
console.log(num.sort() ); //AB YHA SORTING NHI HOGI
// pehele ye numbers string me convert honge honge fir inki koi alg value niklegi uske baad uiske basis pe ye sort honge

// ARRAY REFERENCE (refernce mtlb memory address jha array ki values store hai)
let list = [ "a","b","c"];
// let listcopy = [ "a","b","c"];   listcopy == list : false
let listcopy = list;    //true
//  agar listcopy or list me koi bhi change kru to wo change dono me relflect hoga

// CONSTANT ARRAY
// array me methods toh apply kr skte LEKIN AGR USI SAME ARRAY KO DEFINE KRENGE TO wo define nhi hooga
const a = [ "abc","cdf","rtg"];
// let a = [ "abc","cdf","rtg"]  gives error
a.pop();
console.log(a);

// NESTED ARRAY
let nume =[[2,4],[4,5],[6,7]] ;
console.log(nume[0]);   //[2,4]
console.log(nume[0][1]);    //4




