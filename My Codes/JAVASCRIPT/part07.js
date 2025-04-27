//THIS,ARROW FUNCTION,SETTIMEOUT

//this keyword
//this keyword refers to the object that is executing the current function

//this keyword is used to access the properties and methods of the object within the object itself

// THIS(ye hamre object me jo parameters hai unhe function me access krane ke liye kaam ata hai hai )
// agr ham iske bina access krenge to parameters access nhi honge(show error)
const student = {
    name: "Aditya",
    age: 21,
    city: "delhi",
    eng: 93,
    math: 97,
    hin: 91,

    getavg() {
        console.log(this);  //{name: 'Aditya', age: 21, city: 'delhi', eng: 93, math: 97, …}
        let avg = (this.eng + this.math + this.hin) / 3;    //this refering to student object which exeuting the getavg() fn
        console.log(`${this.name} has got avg marks = ${avg}`);
        //Aditya has got avg marks = 93.66666666666667
    }

}
console.log(student.getavg());
// jo bhi object jis method ko call krr rhi hai wo hi this keyword refer kr rha

// TRY AND CATCH(for error and exception)

try {
    console.log(a); //try block is used to test a block of code for errors
} catch {
    console.log("variable a is not defined");   //catch block is used to handle the error if occurs
}

// catch(e){
//     console.log(e);   // to print the error which occurred   
//  }
//finally block is used to execute code after try and catch, regardless of the result

//MISCELLANEOUS TOPICS

//ARROW FUNCTION
// Arrow functions are a shorter syntax for writing function expressions in JavaScript. They are anonymous (nameless).

const sum = (a, b) => {
    console.log(a + b);
}
sum(3, 4);   //7
console.log(sum(4, 3));  //7
console.log(sum);   // function definition

const cube = a => { //without parenthesis single argument k case me use kr skte
    console.log(a * a * a)

};
cube(3);

// IMPLICIT RETURN IN ARROW FUNCTION
const mul = (a, b) => (       //use () inssted of {}
    a * b         //without return statement return krega
);
console.log(mul(8, 9));  //72

// const sum = (a,b) => a+b ;

// SET TIMEOUT(hamesha milisec me kaam krega to 1 sec ke liye 1000 likhna padega)
// generally api calls ke liye use krte hai or iske baad wala likha hua code rukega nhi wo bhi print ho jayega isse phele

// console.log("HI , there..");

// setTimeout(() => {     //setTimeout(func , timeout);
//     console.log("my dev journey")
// }, 3000);   //3000ms = 3 sec

// console.log("welcome to"); //executed before timeout

//  SET INTERVAL(ye har timeout sec baad program(functon) execute karrwaega)

//  setInterval(() => {
//     console.log("exactly after 2 sec print")
//  },2000);

//  console.log("Hi i m here");

//for stopping
//  let id =  setInterval(() => {
//     console.log("exactly after 2 sec print")
//  },2000);

// clearInterval(id); //in console



// THIS WITH ARROW FUNCTION

const std = {
    name: "Aditya",
    age: 21,
    city: "delhi",
    prop: this, //global scope (window obj)

    //NORMAL FUNCTION
    getname() {
        console.log(this);  //std   :{name: 'Aditya', age: 21, city: 'delhi', prop: Window, getname: ƒ, …}
        console.log(this.name); //Aditya
    },
    getage: function () {
        console.log(this);  //std
        console.log(this.age);  //21
    },

    //ARROW FUNCTION
    getcity: () => {
        console.log(this);  //parent's scope (std'd scope) : window obj {}
        console.log(this.city);     //undefined
    }

    // ,

    // getInfo1 : function(){      //normal fun
    //     setTimeout(() => {          //arrow fun in setTimeout
    //         console.log(this);      //std obj (this refers to parent of getinfo1 fun : std obj )
    //     }, 2000);
    // },
    // getInfo2 : function() {          
    //     setTimeout(function() {     // //normal fun in setTimeout
    //         console.log(this);      //window obj (this refers to settimeout which is a window obj fun)
    //     }, 2000);
    // }

}

std.getname();
std.getage();
std.getcity();

// std.getInfo1();
// std.getInfo2();


// Arrow Function which return the square of a number n
const square = (n) => n * n;
console.log(square(4));  //16


// function print helloworld 5 times after 2 sec
let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval run ho gya")
}, 10000);      //after 10s stopped printing

