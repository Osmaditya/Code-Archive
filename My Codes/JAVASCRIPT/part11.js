//********************************JS CALL STACK , CALLBACK HELL , PROMISES******************************************

//JS CALLSTACK
// function hello(){
//     console.log("inside hello function");
// }
// function demo(){
//     console.log("inside demo function");
//     console.log("calling hello function");
//     hello();
// }
// console.log("calling demo function");
// demo();
// console.log("done bye");

function one() {
    return 1;
}
function two() {
    return one() + one();   //1 + 1
}
function three() {
    let ans = two() + one();        //2 + 1
    console.log(ans);
}
three();   //3

// CALLBACK HELL : PROBLEM DUE TO ASYNCHRONOUS NATURE OF JS 

h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);
// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "yellow";
// },3000);
// setTimeout(()=>{
//     h1.style.color = "purple";
// },4000);


//*************************************WITHOUT PROMISES**************************************** */


// function changeColor(color, delay, nextColorChange) {  //using callbacks (nextColorChange)
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();;
//     }, delay);

// };




// CALLBACK NESTING - CALLBACK HELL 
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("yellow", 1000, () => {
//             changeColor("purple", 1000, () => {
//                 changeColor("orange", 1000);
//             });
//         });
//     });
// });



//***************************************WITH PROMISES************************************** */
function changeColor2(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);

    }) //Without callbacks
    //reject kabhi ayega hi nhi isliy nhi lgaya
};

changeColor2("red", 1000)
    .then(() => {
        console.log("red color was applied");
        return changeColor2("orange", 1000);
    })
    .then(() => {
        console.log("orange color was applied");
        return changeColor2("yellow", 1000);
    })
    .then(() => {
        console.log("yellow color was applied");
        return changeColor2("purple", 1000);
    })
    .then(() => {
        console.log("purple color was applied");
        return changeColor2("orange", 1000);
    })
    .then(() => {
        console.log("orange color was applied");
    });





//PROMISES : PREVENTS CALLBACK 


//without promises
function save2Db(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
//ASYNCHRONOUS SITUATION
save2Db(
    "DATA1", () => {
        console.log("data 1 is saved");
        save2Db(
            "DATA2", () => {
                console.log("data 2 is saved");
                save2Db(
                    "DATA3", () => {
                        console.log("data 3 is saved");
                    }, () => {
                        console.log("failure3 :Poor Connection ..!");
                    }
                )
            }, () => {
                console.log("failure 2:Poor Connection ..!");
            }
        )
    }, () => {
        console.log("failure 1:Poor Connection ..!");
    }
);

//WITH PROMISES
// PROMISES ARE OBJECTS THAT REPRESENT THE FUTURE VALUE OF AN ASYNCHRONOUS OPERATION
// PROMISES ARE IN 3 STATES : PENDING, FULFILLED, REJECTED

function save2Db(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data is saved");  // result for THEN 
        } else {
            reject("failure: Poor Connection ..!"); //reject error throw krta hai
        };
    });
};
// console.log(save2Db("saving data 1"));

// THEN AND CATCH METHOD

// save2Db("DATA1").then(() => {
//     console.log("PROMISE WAS RESOLVED");   //success
// })
// .catch(() => {
//     console.log("PROMISE WAS REJECTED");   //failure
// });


// PROMISE CHAINING : ek promise ke andar dusra promise return karna (replacing callbacks with promises)

// save2Db("DATA1").then(() => {
//     console.log("DATA1 IS SAVED");   //success
//     return save2Db("DATA2");         //returning promise
// })
// .then(() => {
//     console.log("DATA2 IS SAVED");   //success
//     return save2Db("DATA3");         //returning promise
// })
// .then(() => {
//     console.log("DATA3 IS SAVED");   //success
// })
// .catch(() => {
//     console.log("PROMISE WAS REJECTED");   //failure
// });

// RESULT AND ERROR arguments in then and catch method:

save2Db("DATA1").then((result) => {
    console.log("DATA1 IS SAVED");   //success
    console.log("result of promise is : " + result); //success  // jo bhi result ayeg mtlb jo return krega resolve function wo print hoga
    return save2Db("DATA2");         //returning promise
})
    .then(() => {
        console.log("DATA2 IS SAVED");   //success
        console.log("result of promise is : " + result); //success
        return save2Db("DATA3");         //returning promise
    })
    .then(() => {
        console.log("DATA3 IS SAVED");   //success
        console.log("result of promise is : " + result); //success
    })
    .catch((error) => {
        console.log("PROMISE WAS REJECTED");   //failure
        console.log("error of promise is : " + error); //// agr koi error aya to wo error ki jaagah print hoga (result of reject function)

    });
