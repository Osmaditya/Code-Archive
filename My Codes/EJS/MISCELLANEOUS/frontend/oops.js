//OBJECT ORIENTED PROGRAMMING IN JS
// oops is a programming paradigm based on the concept of "objects", which can contain data in the form of fields (often known as attributes or properties) and code in the form of procedures (often known as methods).

let student1 = {
    name: "Aditya",
    age: 21,
    marks: 98
}
let student2 = {
    name: "Ruchika",
    age: 22,
    marks: 99
}
let student3 = {
    name: "Rishi",
    age: 23,
    marks: 93
}
console.log("OBJECT PROTOYPES")
//OBJECT PROTOYPES
//js me har object ka apna ek intenal hidden prototype hota h jo ki uski parent class hoti h.
// prototype se object ko properties aur methods milte h.   

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2];

arr1.sayHello = () => {
    console.log("Hello ,I am a method of array object");
};
console.log(arr1.sayHello()); // Hello ,I am a method of array object
arr2.sayHello = () => {
    console.log("Hello ,I am a method of array  object");
};
// console.log(arr2.sayHello()); // Hello ,I am a method of array object

//har array k liy alag se sayHello method create krna padega jo ki inefficient h.
// isliye hum prototype ka use krenge.

// arr.__proto__.sayHello = () =>{ // ye __proto__ array ka prototype h jo ki array ki parent class h.
//     console.log("Hello ,I am a method of array object from prototype");
// }

// Array.prototype.sayHello = () =>{   // ye prototype array ki parent class h jo ki array ki parent class h.
//     console.log("Hello ,I am a method of array object from prototype");
// }

// String.prototype.sayHello = () =>{  
//     console.log("Hello ,I am a method of string object from prototype");
// }

console.log(arr1.sayHello == arr2.sayHello); // false
console.log('abc'.toLowerCase == 'xyz'.toLowerCase); // true

console.log("FACTORY FUNCTION")
//FACTORY FUNCTION  : RETURNS AN OBJECT
//ek function jo ki object create krta h usse factory function kehte h.
// but ise hm use nahi krenge kyuki ye inefficient h kyuki har bar naye object k liye naye function create hote h.
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    return person;
}
let person1 = PersonMaker("Aditya", 21); //copy
let person2 = PersonMaker("Ruchika", 22);    //copy
let person3 = PersonMaker("Rishi", 23);

console.log(person1.talk()); // Hello, my name is Aditya and I am 21 years old. 
console.log(person2.talk()); // Hello, my name is Ruchika and I am 22 years old.    

console.log("NEW OPERATOR");
//NEW OPERATOR : ek function ko constructor function me convert kr deta h.
//CONSTRUCTOR : doesn't return anything and starts with capital letter.

function Person(name, age) {
    this.name = name;
    this.age = age;

};
Person.prototype.talk = function () {// ye prototype se method ko add krte h.
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

let person4 = new Person("Aditya", 21);  //instace of Person
let person5 = new Person("Ruchika", 22);
//both refer same copy

console.log(person4.talk()); // Hello, my name is Aditya and I am 21 years old.
console.log(person4.talk === person5.talk); // true (qki prototype se method ko add kiya h)

console.log("CLASSES");
//CLASSES 
// ek special type ka function h jo ki constructor function ki tarah hi hota h.
// class ke andar constructor function hota h jo ki object ko create krta h.
// class ke andar methods ko add krne k liye class ke andar hi likhte h unhe prototype se nahi likhte h.
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

let person6 = new PersonClass("Aman", 21);  //instace of Person
let person7 = new PersonClass("Ruchi", 22);
console.log(person6.talk()); // Hello, my name is Aman and I am 21 years old.
console.log(person6.talk === person7.talk); // true (qki talk method automatically prototype se add hota h)

console.log("INHERITANCE");
//INHERITANCE   : ek class se dusri class ko inherit krna.
// ek class se dusri class ko inherit krne k liye extends keyword ka use krte h.
//super keyword ka use krke parent class ke constructor ko call krte h.

class Student extends PersonClass {
    constructor(name, age, marks) {
        super(name, age); // parent class ka constructor ko call krne k liye super keyword ka use krte h.
        this.marks = marks;
    }
}

class Teacher extends PersonClass {
    constructor(name, age, subject) {
        super(name, age); // parent class ka constructor ko call krne k liye super keyword ka use krte h.
        this.subject = subject;
    }
}

let stu1 = new Student("Aditya", 21, 98);  //instace os student
let stu2 = new Student("Rishi", 23, 97);  //instace os student

console.log(stu1.talk()); // Hello, my name is Aditya and I am 21 years old.
console.log(stu1.name); // Aditya
console.log(stu1.marks); // 98


let tec1 = new Teacher("Ruchika", 22, "Maths");  //instace os student
let tec2 = new Teacher("KD", 23, "Physics");  //instace os student
console.log(tec1.talk()); // Hello, my name is Ruchika and I am 22 years old.
console.log(tec1.name); // Ruchika
console.log(tec1.subject); // Maths

