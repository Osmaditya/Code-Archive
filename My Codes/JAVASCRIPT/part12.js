///**************************************************Async function, await,APIs, AJAX, First API Request******************************************


// /************Async functions ******************* */
// using async keyword : Jab tum kisi function ke aage async likhte ho, to wo function hamesha ek Promise return karta hai, chahe tum usme koi promise return karo ya nahi.

async function greet() {
    // a.abc();  //error k liy is uncomment kr do : promise state rejected ho jayegi otherwise fulfilled rhegi
    // throw "error occurred";      //catch me yhi jayega as error
    return "welcome guyss";

};
// async function me ham agr promise likhe bhi na tab bhi ek promise return karate hai as a object 

// console.log(greet());   //Promise {<fulfilled>: 'welcome guyss'}
greet().then((result) => {
    console.log("promise fulfilled & result :", result);
})
    .catch((error) => {
        console.log("promise rejected with error: ", error);
    });

//ayncc arrow function
let arroww = async () => { };

//************************AWAIT KEYWORD*********************************************************************
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num < 3) {
                reject("promise is rejected");
            }
            console.log(num);
            resolve();
        }, 1000);
    })
}
//await keyword : await ka use kisi async function ke andar hota hai. Ye kisi promise ke complete hone ka wait karta hai, bina thread block kiye. Jab tak promise resolve nahi hota, agla code wait karta hai.
async function demo() {  //returns promise qki y async func hai
    try {
        await getNum();
        await getNum(); //waits for promise to complete(resolve)
        await getNum();
        await getNum();
        getNum();
    }
    catch (err) {
        console.log("error occurred:", err)  //err : promise is rejected
    }
    console.log("remaining code always execute due to try & catch block");

};
demo(); //calling demo 

// COLOR CHANGE FUNC USING ASYNC FUNCTION
let h1 = document.querySelector("h1");
function changeColor2(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("color changed to", color);
            resolve("color changed!");
        }, delay);

    })
};

async function colorChange() {
    await changeColor2("red", 1000);
    await changeColor2("orange", 1000);
    await changeColor2("yellow", 1000);
    await changeColor2("purple", 1000);
    changeColor2("orange", 1000);
}
colorChange();

//****************************************************************APIS****************************************************************************** */

//APIS EXAMPLES:
// https://catfact.ninja/fact
// https://bored-api.appbrewery.com/random
// https://dog.ceo/api/breeds/image/random
// "https://icanhazdadjoke.com/"    //random jokes

//ACCESSING DATA FROM JSON
//JSON.parse()  && JSON.stringify()

let jsonReq = '{"fact":"The Egyptian Mau is probably the oldest breed of cat. In fact, the breed is so ancient that its name is the Egyptian word for \u201ccat.\u201d","length":132}';
console.log(jsonReq);

let valJson = JSON.parse(jsonReq);  //json string ko js object me badalna
console.log(valJson);   //gives json string AS JS object
console.log(valJson.fact);  //the egyptian...

let student = {
    name: "Aditya",
    age: 22
};
//js object to json string
console.log(JSON.stringify(student));   //{"name":"Aditya","age":22} 

//*************************************************************************************************************** */
//TESTING API REQUESTS ...

// HOPSCOTCH : Hoppscotch ek open-source API development tool hai —
//  jiska use developers APIs ko test, debug, aur explore karne ke liye karte hain. Yeh ek Postman ka lightweight aur fast alternative hai, jo browser-based hota hai. 

//Agar tumne ek backend API banayi hai: To Hoppscotch me us URL ko daal ke check kar sakte ho ki response kya aa raha hai — bina frontend banaye.


// **********************************************************************************************************************
//AJAX : Asynchronous JS & XML
// Ye ek technique hai jisse web page server se data fetch kar sakta hai bina page reload kiye. Iska main goal hota hai:

// 🔁 Page ko dynamically update karna without reloading the full page

//HTTP VERBS...
//GET : to get data from api
//POST : to send data / create data
//DELETE : to delete data

//STATUS CODES..
// 200 : OK
// 404 : Not Found
// 400 : Bad Request
// 500 : Internal Server Error

//ADD INFORMATION IN URLS ....

//1 Query Strings:
// https://www.google.com/search?q=harry+potter&oq=harry+potter&gs_l
// q= harry+potter 

//2) ids in routes
// https://api.potterdb.com/v1/movies/:id
//https://api.potterdb.com/v1/movies/a3676132-39bf-4b3c-aae2-141e030543d2

//FETCHING DATA USING FETCH API

//fetch(url) : Ye ek built-in function hai jo kisi URL se data ko fetch karne ke liye use hota hai. Ye ek Promise return karta hai, jo response ko represent karta hai.
// Ye function asynchronous hota hai, iska matlab ye hai ki ye data ko fetch karne ke liye wait karta hai bina kisi thread ko block kiye.

let url = "https://catfact.ninja/fact";

fetch(url).then((res) => {    // Ye API ko call karta hai (GET request). Iska return ek Promise hota hai jo Response object deta hai.
    // console.log("RESPONSE -",res);      //RESPONSE - Response {type: 'cors', url: 'https://catfact.ninja/fact', redirected: false, status: 200, ok: true, …}
    return res.json(); //res.json : 
})
    .then((data) => {
        console.log("DATA 1:", data);  //DATA: {fact: 'A female cat will be pregnant for approximately 9 …tween 62 and 65 days from conception to delivery.', length: 110}
        console.log("FACT 1:", data.fact);
        return fetch(url); // Promise chaining ka, jisme 2 baar ek API call ki ja rahi hai — pehli baar fact 1 ke liye, aur doosri baar fact 2 ke liye.
    })
    .then((res) => {
        return res.json();  //// Ye bhi ek Promise return karta hai
    })
    .then((data) => {
        console.log("FACT 2:", data.fact);   //fact 2 print hoga
    })
    .catch((err) => {
        console.log("ERROR -", err);
    });

// line 144 : return res.json(); 
// ✅ Jab API se response milta hai, to:
// res ek Response object hota hai (isme headers, status, body sab hota hai)
// .json() method us body ko JSON object me convert karta hai (yani readable JS object)
// Ye bhi ek Promise return karta hai

//USING FETCH WITH ASYNC /AWAIT...

let url2 = "https://catfact.ninja/fact";



async function getData() {
    // console.log(fetch(url));  // yha api call succesfull nhi hui thi undefined show krega qki url aane se pehle hi print ho jayega
    try {
        let res = await fetch(url2);       // API call
        let data = await res.json();       // JSON me convert   ////yha agr ye await nhi lagaya to ye print nhi hoga undefined dikhayega
        console.log("fact1 in async:", data.fact);            // Fact print

        //dubara call krne k liy for second fact
        // let res2 = await fetch(url2);       
        // let data2 = await res2.json();       
        // console.log("fact2 in async:",data2.fact);          

    } catch (e) {
        console.log("error:", e);          // Error handling
    }
}
getData();

console.log("After getDATA()");    //y getdata() k pehle hi print ho jaayega
// yha ye fetch asynchronous kaam krenge to vo wait krega api fetch ka tbtk usse pehle hi "After Getdata" print ho jayega


