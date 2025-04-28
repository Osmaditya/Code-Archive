//DOM
// DOM DOCUMENT OBJECT MODEL(the dom represents a document with a logical tree.) 
// dom ke andr har ek single node is an  object in js

//it allows us to manipulate/change webpage content(html elements)

console.log(document);
console.dir(document);  //to show properties of document object
// ALL prop ke andr hamne jitne bhi HTML tags use kiye hai html me wo sare dikhayi denge

//************** */  SELECTING ELEMENTS**************************************

// 1. getElementById()  (to select a single element)
// =>returns the element as an object or null(If not found)
// important jo bhi ye return krega wo bhi OBJECT HI HOGA

let imgObj = document.getElementById("mainImg"); // ye hume ek object return krega jo ki image tag ko represent krega
console.dir(imgObj); // ye hume image tag ki properties dikhayega

// document.getElementById("mainImg").src = "./creation_1.png"; //to change spiderman image using js

console.log(document.getElementById("abc"));    //null  qki esi koi id hai hi nahi

// 2) .getElementsByClassName()  :  returns the element as an html collection or empty collection 
//(to select multiple elements)

// let images=document.getElementsByClassName("oldImg");
// for(let i=0;i<images.length;i++){
//     images[i].src="spiderman_img.png";
//     console.log(`value of image no.${i} is changed.`);
//  }

// 3) .getElementsByTagName()  : returns the element as an html collection or empty collection
// console.dir(document.getElementsByTagName("p")); // ye hume p tag ki collection dikhayega

// 4)  Query selector 
// console.dir(document.querySelector('p'));   // ye hume pehla p tag dikhayega jo ki document me hai   selecyt by tag name
// console.dir(document.querySelector('#description')); // selected by id
// console.dir(document.querySelector('.oldImg'));     // selected by class

// // let change =document.querySelector('p')
// // change.innerText="abx"

// // for getting all anchor tag inside div:

console.dir(document.querySelectorAll('div a'));   //  provides collection of all anchor tag inside div tag as a nodelist

// // MANUPULATION PROPERTIES AND METHOD

// // innerText=>shows the visible text conatined in a node
// // textContent = shows the full text  or ye wesa hi print hota hai jesa index html me hmne iise likha hai(in vs code) hidden text bhi dikhata hai
// // innerHTML%  shows the full markup : including bold, italic,comments,anchor  etc.

let t = document.querySelector('p');
console.log(t.innerText);  // ye sirf visible text dikhayega
console.log(t.textContent); // ye text ko jesa likha hai wesa hi dikhayega   
console.log(t.innerHTML);  // ye inner html ko dikhayega jo ki p tag ke andar hai

let heading = document.querySelector('h1');
heading.innerHTML = `<u> ${heading.innerText} <u/>`;  // ye heading ke andar jo bhi likha hai usko underline karke dikhayega

// MANUPULATING ATTRIBUTE 
// Object.getAttribute(atr) :   // to get the value of attribute atr of the object
// Object.setAttribute(atr,value) : // to set the value of attribute atr of the object

let img = document.querySelector('img'); // ye hume image tag ka object dega
console.log(img.getAttribute('src')); // ye hume image tag ka src attribute dega    //spidermanimg.png

//MANIPULATING STYLE :CSS PROPERTIES
// object.style.property=value;  // to set the value of inline css property of the object

let links = document.querySelectorAll(".box a")
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "YELLOW";
}

for (let link of links) {
    link.style.backgroundColor = "Purple";
}
//this not sets external css property but sets inline css property

//  object.classList; // to add a class to the object
// classList is a property of object which is used to add,remove,contain,toggle class

// classList.add(to new class) and also use 
// remove() : to remove class
// contain() : to verfiy class
// toggle() : to toggle between add and remove class


let i = document.querySelector('img');
console.log(i.classList); // ye hume class list dikhayega jo ki image tag ke andar hai
// i.classList.add("blueBorder"); // ye image tag ke andar new class add krega;
// i.classList.remove("blueBorder"); // ye image tag ke andar class remove krega;
// i.classList.toggle("blueBorder"); // ye image tag ke andar class ko toggle krega;
// i.classList.contains("blueBorder"); // ye image tag ke andar class ko check krega ki wo hai ya nahi;

//NAVIGATION 
//1)parentElement:  to get the parent element of the object
//2)children:  to get the child elements of the object
//3)previousElementSibling:  to get the previous sibling element of the object
//4)nextElementSibling:  to get the next sibling element of the object

// example
let H = document.querySelector('h4');
console.log(H.parentElement); // ye hume parent element dikhayega jo ki h4 tag ka hai //div.box

let B = document.querySelector('.box');
console.log(B.children); // ye hume child elements dikhayega jo ki box class ke andar hai //img,ul

console.log(B.previousElementSibling); // ye hume previous sibling element dikhayega jo ki box class ke andar hai //p tag
console.log(B.nextElementSibling); // ye hume next sibling element dikhayega jo ki box class ke andar hai //h2 tag


//ADDING AND REMOVING ELEMENTS
// Document.createElement(tagName):  to create a new element with the given tag name
// appendChild(newElement):  to add the new element as a child of the given element

let P = document.createElement('p'); // ye hume new p tag dega
P.innerText = "This is a new paragraph"; // ye p tag ke andar text dega
//abhi bhi y page pe show nhi hoga qki ye abhi tak document me nahi hai, to show we need to append it to the document

let Box = document.querySelector('.box'); // ye hume box class ka object dega
Box.appendChild(P); // ye p tag ko box class ke andar append krega

//append(element)  //todirectly add new element to the end 
//prepend(element)  // to add the new element  at the beginning
//InsertAdjacentElement(where,element)  // to add the new element at the specified position
//beforebegin,afterbegin,beforeend,afterend

let btn = document.createElement('button'); // ye hume new button tag dega
btn.innerText = "Click Me"; // ye button tag ke andar text dega

Box.insertAdjacentElement('afterbegin', btn); // ye button tag ko box class ke andar insert krega at the beginning

//REMOVING ELEMENTS

// removeChild(element)  // to remove the child element from the given element
// remove()  // to remove the element from the document

// Box.removeChild(P); // ye p tag ko box class se remove krega
// btn.remove(); // ye button tag ko document se remove krega


// PRACTICE QUESTION
// let para = document.createElement("p");
// para.innerText = "hey i m kdjfgngnierngingirgnerred"
// // para.innerText.color ="red" it doent make any sense class hi banani padegi
// document.querySelector("body").append(para);


// let h = document.createElement("h1");
// h.innerText = "hey i m in a div";

// let p = document.createElement("p");
// p.innerText = "hey i m me too";

// let d = document.createElement("div");
// d.append(h);
// d.append(p);
// // div.classList.add("box");

// document.querySelector("body").append(d);

