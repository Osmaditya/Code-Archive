console.log("Hello world!");
let a=4;
let b=7;
console.log("sum is",a+b);
// this is comment 

// TEMPLATE LITERAL 
let pen=10;
let eraser = 5;
console.log("The total price is:",pen+eraser,"rupees."); //without template literal

console.log(`The total price is: ${pen+eraser} rupees.`);   //with template literal `   ${}   `;

// OPERATORS IN JS 
// 1)ARITHMETIC (+,-,*,/,%,**)
let P=4;
let Q=7;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// 2)UNARY
console.log(a++);
console.log(b--);

// 3)ASSIGNMENT(=,+=,-=,*=,/=,%=,**=)
//4)COMPARISON(==,===,!= ,>=,<=,>,<)
console.log(1=='1'); // true   // loose equality operator
console.log(1==='1'); // false  // strict equality operator     
console.log(0==false); // true   // loose equality operator
console.log(0===false); // false  // strict equality operator
console.log(null==undefined); // true   // loose equality operator
console.log(null===undefined); // false  // strict equality operator

//comparison for non numbers
console.log('a'>'b'); // false  


// 5) LOGICAL (&&,||,!)
console.log(true && false); // false    
console.log(true || false); // true
console.log(!true); // false

// truthy and falsy
// null and undefined , empty string = false
// koi bhi string ki value true hi hogii

// CONDITIONAL STATEMENTS

// 1)IF STATEMENT   
let age = 23;
if(age>18){
    console.log("Adult");
}
// 2)if- else if statement 
if(age>18){
    console.log("Adult");
}else if(age<18 && age>0){
    console.log("Child");
}

// 3)else statement  
if(age>18){
    console.log("Adult");
}else{
    console.log("Child");   
}

// 4)Nested if else statement   

// 5) Switch statement  
let color = "red";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    default:
        console.log("lights broken");
}

// ALERTS & PROMPTS

alert("someting is wrong");
console.error("some error occured");
console.warn("warning msg");

//  let roll=prompt("Enter your roll no.");

//  console.log(roll);

let firstname=prompt("Enter your firstname");
let lastname=prompt("Enter your lastname");
msg ="Welcome" + firstname +" "+ lastname;
alert(msg)



