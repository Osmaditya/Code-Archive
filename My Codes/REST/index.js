const express = require('express'); // Importing the Express module
const app = express();  // Creating an instance of Express
let port = 3000;
const path = require("path");   // Importing the Path module for handling file and directory paths

const { v4: uuidv4 } = require('uuid'); //universally unique identifier // Unique ID generate karne ke liye uuid

const methodOverride = require('method-override');  //edit.ejs k form method ko patch me badalne k liy
app.use(methodOverride('_method'));     // PATCH/DELETE method ko HTML form me use karne ke liye


// Setting the view engine to EJS for rendering HTML templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));     //public me jo style.css hai usko views me index.ejs se link krne k liy

// Middleware to parse URL-encoded data and JSON data from incoming requests(forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);   // Logging a message to the console once the server is running
});

// Sample posts data with unique IDs
let posts = [
    {
        username: "ruchikayadav123",
        content: " I am a full stack developer",
        id: uuidv4()
    }, {
        username: "rishi1026",
        content: "I am a Gate Topper ",
        id: uuidv4()
    }, {
        username: "osmaditya",
        content: " I love to watch and play cricket",
        id: uuidv4()
    }
];

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  CREATING RESTFUL APIS ....   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 1) TO GET DATA FOR ALL POSTS **********************************************************************
// Index Route to render all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// 2) TO ADD A NEW POST  *****************************************************************************

// Route to render the "New Post" form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");  // new.ejs me form hai new post ke liye
});

// Route to handle the creation of a new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;  // form se username & content nikala
    let id = uuidv4();  // har post ka unique ID banaya
    posts.push({ username, content, id });  // post array me push kar diya

    res.redirect("/posts");  // all posts page par redirect kar diya
});

// TO GET ONE POST USING ID *************************************************************************************************
// Route to handle displaying a single post by ID

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);  // ID se post dhoondha
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });       // show.ejs me post bhej diya
});

// PATCH REQUEST TO UPDATE THE POST ******************************************************************************************
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;  // updated content form se aaya
    let post = posts.find((p) => id === p.id);  // post dhoondha
    post.content = newContent;  // content update kar diya
    res.redirect("/posts");  // wapas all posts page par bhej diya
});

//EDITING THE POST
//Edit form dikhane ke liye route - jisme existing post ka data hoga
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});


//  DELETE THE PARTICULAR POST *********************************************************************************************************
app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);    // us ID ke post ko hata diya
    res.redirect('/posts');

})