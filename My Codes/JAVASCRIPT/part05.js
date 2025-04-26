//*****************************OBJECTS LITERALS************************************** *//
// let arr = [];
// console.log(typeof(arr))  // objects

// OBJECTS LITERALS (used to sotre keyed collection and complex entities)
// (student)name - Arya = property 1 , age = 20 = property 2
// it is similar  dictionory

const student = {
    name: "Aditya",
    age: 21,
    marks: 99
};
console.log(student);   //{name: 'Aditya', age: 21, marks: 99}
console.log(typeof (student));   //object

// object ke andr koi bhi specific order nhi hota or ye arrays se jada readable hai ..

const item = {
    price: 100.3,
    discount: 50,
    colors: ["red", "yellow"]       //arrays as value in object literal
};

const post = {
    username: "@osmaditya",
    content: "This is my first post",
    likes: 2563,
    reposts: 5,
    tags: ["@gfg", "@leetcode"]
};
// ACCESSING VALUES
console.log(post["content"]);   //This is my first post
console.log(post.content);      //This is my first post
console.log(post["likes"]);     //2563
console.log(post.reposts);      //5
console.log(post.tags[0]);      //@gfg

let prop = "reposts";
console.log(post[prop]);    //5 // koi bhi aisa case aye jha haame variables ka use krna pade to ham wha brcaket[] wali syntax ka use krte hai
console.log(post.prop);    //undefined

// GET VALUES(JS hamre sari keys ko string me convert krr deta hai agr key as a number dia tab bhi wo use string me convert krr dega)

let num = {
    1: "a",
    2: "b",
    null: "null",
    undefined: "sd"
};

console.log(num["1"]);
console.log(num[1]); // yha jo hamne 1 likha hai wo index bhi nhi hai wo number bhi nhi hai wo directly ek string me convert ho gya hai uske baad key se match kiya usek baad value dii
console.log(num[undefined]);


// console.log(num.1) but  . isko string me convert nhi krta isliye error dedeta hai
console.log(num.null);

// ADD , UPDATE AND DELETE
let cars = {
    low: "Nano",
    average: "Ford",
    high: "BMW"
};

cars.low = "Honda";   //update
cars.extreme = "Ferrari";     //add
delete cars.average;    //delete
console.log(cars);    // {low: 'Honda', high: 'BMW', extreme: 'Ferrari'}

//OBJECTS OF OBJECTS

const classInfo = {
    Aditya: {
        grade: "A+",
        city: "Delhi"
    },

    Aman: {
        grade: "A",
        city: "Mumbai"
    },

    Rishi: {
        grade: "B+",
        city: "Goa"
    }
};
console.log(classInfo.Aditya);  //{grade: 'A+', city: 'Delhi'}
console.log(classInfo.Rishi.city);  //Goa

// ARRAY OF OBJECTS(means array ke andr objects banayenge)
const Info = [
    {
        name: "Aditya",
        grade: "B+",
        city: "Mumbai"

    },
    {
        name: " Rishi",
        grade: "A+",
        city: "Delhi"

    },
    {
        name: "Ruchika",
        grade: "A",
        city: "Pune"

    }
];

//ye 2d arrya nhi hai , ye phele array to 2d array ki trah hi acces krenge lekin unke andr ki properties ko ham objects ki tarah hi access krenge . lagake
console.log(Info[0]);
console.log(Info[0].name)   //Aditya
console.log(Info[1].city)   //Delhi
// ham isko update bhi krr skte hai

//MATH OBJECT
console.log(Math);
//Properties
console.log(Math.PI);   //3.141592653589793
console.log(Math.E);    //2.718281828459045
//Methods
console.log(Math.abs(-2.3));    //2.3
console.log(Math.pow(2, 3));     //8
console.log(Math.floor(2.6));   //2 
console.log(Math.ceil(2.6));    //3

//Math.random() gives any value b/w 0 & 1  : excluding(1)       0<= x <1
console.log(Math.random());    // 0.6447413794685299

// Random Integer 
// to generate int from 0 to 10 

let x = Math.random();
x = x * 10;
x = Math.floor(x);   //range(0-9)
x = x + 1;        //range (0-10)
console.log(x);

let y = Math.floor(Math.random() * 10) + 1; //combined

// //  for generating numbers between 20 to 24
let l = Math.floor(Math.random() * 5) + 20
console.log(l);


// // GUESSING GAME
//  let max= prompt("Enter the Max number");
// console.log(max);
// const random = Math.floor(Math.random()*max +1);
//  let enter = prompt("Guess any number");

//  while(true){
//     if(enter=="quit"){
//         console.log("You quit");
//         break;
//     }
//     if(enter==random){
//         console.log("You guessed it right")
//         console.log(random)
//         break;
//     }
//      else if(enter<random){
//         enter =prompt("please guess bigger number")
//      }
//      else{
//         enter=prompt("please guess smaller number")
//      }
//  }

