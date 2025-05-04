//**********************************************AXIOS**************************************************************

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getData();
    console.log(fact);

    let p = document.querySelector("#result");  //<p id="result">
    p.innerText = fact;
});


//AXIOS : library to make http requestls like fetch()
let url = "https://catfact.ninja/fact";
async function getData() {
    try {
        let res = await axios.get(url);     //axios.post() bhi hota hai
        // console.log("Data using axios:", res.data); //  DAta print
        //console.log("fact1:", res.data.fact);  //// agr yha hi console laga denge to wo to console me hi print krke de dega na
        return res.data.fact;

    } catch (e) {
        console.log("error:", e);          // Error handling
        return "NO FACT FOUND!"
    }
}
getData();

//************DOG PICTURE API EXAMPLE************************ */
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#dogBtn");

btn2.addEventListener("click", async () => {
    let imgurl = await getImg();

    let img = document.querySelector("img");  //<p id="result">
    img.setAttribute('src', imgurl);
});

async function getImg() {
    try {
        let res = await axios.get(url2);
        return res.data.message;

    } catch (e) {
        console.log("error:", e);          // Error handling
        return "NO IMAGE FOUND!"
    }
}
getImg();

//********************************SENDING HEADERS*************************************

const url3 = "https://icanhazdadjoke.com/"   //random joke wali link

async function getJokes() {
    const config = { headers: { Accept: "application/json" } };

    let res = await axios.get(url3, config);    // headers as additional info add krne se result json format me dega otherwise html formal me  deta
    console.log("joke data : ", res.data);
}


getJokes();

//****************************UPDATING QUERY STRINGS************************************************ */
//COLLEGE SEARCH

let url4 = "http://universities.hipolabs.com/search?name=";

let btn3 = document.querySelector("#collBtn");    //<button id="collBtn">

btn3.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let collArr = await getColleges(country);
    // console.log(collArr);
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; // shuru pe puri list khali rhe
    for (col of collArr) {
        console.log(col.name);  //har object col ka name key se value nikal rhe
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    }
}


async function getColleges(country) {
    try {
        let res = await axios.get(url4 + country);
        return res.data;    //array of objects return kr rha

    } catch (e) {
        console.log("error:", e);          // Error handling
        return [];
    }
}

//************************************************************FREE APIS ******************************************************************* */

// Free APIs for Project

// Potter DB
// Docs - https://potterdb.com/?ref=apislist.com
// API - httpsULapL2QtteLdb-nml

// 2. Random Cats
// Docs - https•//cataas com/doc html
// API - https://cataas.com

// 3. Reddit
// Docs - https://www.reddit.com/dev/api/
// API - https://wvm.reddit.com/r/Wallstreetbets/top.ison

// 4. Food Facts
// Docs - https://wiki.openfoodfacts.org/APl
// API - https://world.openfoodfacts.org/api/v0/product/737628064502.json

// 5. Random Jokes
// Docs - https://sv443.net/iokeapi/v2/
// API - https://v2.jokeapi.dev/joke/Any?safe-mode

// 6. Dictionary
// Docs - https://dictionaryapi.dev/
// API - https://api.dictionaryapi.dev/api/v2/entries/en/digital

// 7. Quotes
// Docs - https://pprathameshmore.github.io/QuoteGarden/
// API - https://quote-garden.onrender.com/api/v3/quotes

// 8. Library
// Docs - https://openlibrary.org/developers/api
// API - http://openlibrary.orq/api/volumes/brief/isbn/9780525440987.ison

// 9. Generates Fake Data
// Docs - https://fakerapi.it/en
// API - https://fakerapi.it/api/vl/credit cards? quantity=2

// 10. Football Data
// Docs - https://wwu.football-data.org/documentation/quickstart
// API - http://api.football-data.org/v4/competitions/

// Explore More APIs https://mixedanalvtics.com/bloq/list-actuallv-free-open-no-auth-needed-apis/