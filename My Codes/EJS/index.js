const express = require('express');
const app = express();

let port = 3000;
// jese hamne express ko require kiya hai hame EJS ko require krne ki jarurt nhi (but npm install ejs krna padega)
// kyuki by default ejs phele se hi express me install hota haii or expressko ham phele hi require krr chuke haii

app.set('view engine', 'ejs'); // Set EJS as the templating engine

app.get('/', (req, res) => {
    res.render('home.ejs');
}); // Render the home.ejs file

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.get('/', (req, res) => {
//     res.send('home.ejs');
// }); // Render the home.ejs file

// **setting path for views directory if we run the server from a different directory
// const path = require('path');

// app.set('views', path.join(__dirname, 'views')); // Set the views directory to the views folder in the current directory

// Passing data from database to the EJS file
//  FOR RANDOM NUMBER 
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    res.render("rolldice.ejs", { diceVal }); // Pass the random number to the EJS file
});

//instagram templating example
app.get("/ig/:username", (req, res) => {
    let { username } = req.params; // Get the username from the URL
    const followers = ["Rishi", "Ruchika", "Varsha", "Aditya", "Shivam", "Siddharth", "Ravi", "Rohit", "Ravi"];
    res.render("instagram.ejs", { username, followers }); // Pass the username to the EJS file
});
//http://localhost:3000/ig/aditya  //This page belongs to : @aditya

// Passing Data.json file  to EJS file (Instgarm page )
app.get("/ig2/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if (data) {
        res.render('instagram2.ejs', { data });
    } else {
        res.render('error.ejs');
    }

})

//using static files
app.use(express.static("public"));
// Now you can access them via: http://localhost:3000/bhimshankar.webp

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, "public")))