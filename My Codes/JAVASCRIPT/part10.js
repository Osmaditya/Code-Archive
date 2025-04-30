// DOM EVENTS : signals that something has happened
// 1. DOM events are actions that occur as a result of the user or the browser manipulating a page.
// 2. DOM events can be triggered by the user (e.g., clicking a button, submitting a form) or by the browser (e.g., loading a page, resizing a window).

// AGR HAMNE INLINE JS LIKHIA HAI OR EXTERNAL JS BHI LIKHI HAI TO EXTERNAL JS WALI KI JADA PRIORITY HOGI
// 1)onclick event
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("Button clicked");
// };
// btn.onclick = function () {
//     console.log("Button clicked again");
//   // This will override the previous onclick function
//   };

// let btns = document.querySelectorAll("button");
// for(let btn of btns){
//     btn.onlick = sayHello;
//     btn.onclick = sayGoodbye;
//     // This will override the previous onclick function  
//     //so, to use both functions (sayhello and say goodbye) we use event listners
// }

// function sayHello() {
//   console.log("Hello, World!");
// };
// function sayGoodbye() {
//   console.log("Goodbye, World!");
// };

// // 2)onmouse event
// btns[2].onmouseenter = function () {    //Like 3 button pe mouse enter krne pr ye function chalega
//   console.log("Mouse entered the button");
// };

//for multiple events we use event listener
//EVENT LISTENER

let btns = document.querySelectorAll("button");

//event listener se niche apply kiy gye teeno function  buttons pe apply honge
for (let btn of btns) {
    btn.addEventListener("click", function () {
        console.log("Button clicked using event listener");
    });
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayGoodbye);

    btn.addEventListener("dblclick", function () {
        console.log("Button double clicked using event listener");
    });
};

function sayHello() {
    console.log("Hello, World!");
};
function sayGoodbye() {
    console.log("Goodbye, World!");
};

//ACTIVITY : GENERATE A RANDOM COLOR ON BUTTON CLICK

let b = document.querySelector(".bt");
b.addEventListener("click", function () {
    let color = generaterandomcolor();
    let h3 = document.querySelector("h3");
    h3.innerText = color;
    // h3.innerText = color; ye line h3 ke andar color ko set karegi
    let box = document.querySelector(".color-box");
    box.style.backgroundColor = color; // ye div box ke background color ko set karegi
});
function generaterandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

//this KEYWORD : 
// In the context of an event handler, this refers to the element that triggered the event.

let di = document.querySelector('.dd')

// di.addEventListener("mouseenter",function(){
//     console.log(this.innerText);
//     console.log(this);// ye hamra div hi haii jab ye run hoga to div class dd  display hoga console me
//     this.style.backgroundColor="pink";

// });


// changing the color of multiple tags using "this" keyword

function change() {
    console.log(this.innerText);
    this.style.backgroundColor = "yellow"
}
let span = document.querySelector("span");
di.addEventListener("mouseenter", change);   // ye div ke andar span pe mouse enter hone pr ye function chalega
span.addEventListener("mouseenter", change); // ye span pe mouse enter hone pr ye function chalega

// KEYBOARD EVENT
let s = document.querySelector("span")

s.addEventListener("click", function (event) {
    //event argument is an object that contains information about the event that occurred.
    console.log(event); //pointer event
    console.log("ping pong");
})

let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("key was pressed") ; // yha pe jo hamri key hai wo back space ki liye bhi kaam kregi 
// })
// inp.addEventListener("keyup",function(event){
//     console.log(event)
//     console.log("key is released");
// })
inp.addEventListener('keydown', function (e) {
    console.log("code : ", e.code);  //"KeyA","Backspace", "Space", "Slash"etc.
    console.log("key : ", e.key);   // "a", "Backspace", " ", "/",etc.
});


//  ARROW UP AND ARROW DOWN GAME
ip2 = document.querySelector("#ip2");
ip2.addEventListener("keydown", function (e) {
    console.log("code =", e.code);
    if (e.code == "KeyW") {
        console.log("Move upward");
    }
    else if (e.code == "KeyS") {
        console.log("Move downward");
    }
    else if (e.code == "KeyA") {
        console.log("Move leftward");
    }
    else if (e.code == "KeyD") {
        console.log("Move rightward");
    }
});

//FORM EVENTS

// let form = document.querySelector("form");
// form.addEventListener("submit",function(){
//     alert("Form submitted"); // ye form submit hone pr alert karega
// });

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    // agr mujhe ye krna  hai ki jo mene button diya hai uspe click krne pe wo ush url pe na jaye jo mene diya hai link me(/action)
    e.preventDefault(); // ye form ko submit hone se roke ga
    alert("Form submitted"); // ye form submit hone pr alert karega


    // // FORM KE ANDR KA DTA ACCESS KRNE KE LIYE

    let user = document.querySelector("#user").value; // ye name input ka value access karega
    let pass = document.querySelector("#pass").value; // ye password input ka value access karega

    alert(`Hi ${user},Your Password is set to ${pass}`); // ye alert karega username and password ko

    // ACCESSING ALEMENTS OF FORM WITHOUT QUERY SELECTORS

    let usr = this.elements[0];     //form.elements[0]
    let pss = this.elements[0];     //form.elements[1]
    console.log(`Username: ${usr.value} ,Password : ${pss.value}`);
});


// MORE EVENT...........................

let i = document.querySelector("#user");
i.addEventListener('change', function (e) {
    console.log("changed event");
    console.log("final change", this.value);  //initial state aur final state me jo change hua bs vhi dikhayega
});
i.addEventListener('input', function (e) {
    console.log("input event  ");
    console.log("final change", this.value);  //chote chote changes ko bhi print krega jaise har letter tyoe hona
});

// // ACTIVITY  

let w = document.querySelector(".write")
let pa = document.querySelector(".para")
w.addEventListener('input', function (e) {
    console.log(w.value)
    pa.innerText = w.value;
})