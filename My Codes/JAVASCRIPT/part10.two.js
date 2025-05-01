// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

//Event Bubbling : nested elements k agar alag alag eventlisteners hai, to agar internal el ka eventlistener trigger hota hai toh vo automatically bahar wale elements k event listener trigger kr dega 

// to stop event bubbling ,  use event.stopPropagation(); in function

// div.addEventListener("click", function () {
//     console.log("Div clicked");
// });
// ul.addEventListener("click", function (e) {
//     console.log("Ul clicked");
//     e.stopPropagation();

// });

// for(li of lis){
//     li.addEventListener("click", function (e){
//         console.log("Li clicked)");
//         e.stopPropagation();
//     })
// }

//ACTIVITY - TODO APP

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

//to add tasks
btn.addEventListener("click", function (e) {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
});



//to delete tasks
// let delBtns = document.querySelectorAll(".delete");

// for(let delbtn of delBtns){
//     delbtn.addEventListener("click",function(e){
//         let par = this.parentElement;     //using navigation
//         par.remove();
//     });
// }

// delete child k jagah parent pe lagate hai 
// ul.addEventListener("click" ,function(e){
//     console.log(e.target);      //button ne trigger kiya
//     console.log(e.target.nodeName);     //BUTTON agar button pe click kiy , LI agar eat pe click kiy

// });

ul.addEventListener("click", function (e) {

    if (e.target.nodeName == "BUTTON") {
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});