//****************************running file in node terminal**************************************
// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello ",i);
// }

// console.log("bye!");

//********************************process object *************************************************** */
// let args = process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello ", args[i]);
// }       
// write    node script.js Aditya Abhishek     in terminal
//hello  Aditya
// hello  Abhishek

//***************************module.exports************************************************** */
// const someValue = require("./math.js");
// console.log(someValue);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//exporting from different directory(Fruits)
// const info = require("./Fruits"); //
// console.log(info); //
// // [
// //   { name: 'Apple', color: 'Red' },
// //   { name: 'Banana', color: 'Yellow' },
// //   { name: 'Guava', color: 'Green' }
// // ]
// console.log(info[0].name); //Apple
// console.log(info[1].name); //Banana

// ab tk sb require aur module.exports se kr rhe the
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//understanding import 
import { sum, PI } from "./math.js";   //import me pura file ka naam likhte hai math.js

console.log(sum(1, 2));

import { generate } from 'random-words';  //package install kiya nodejs dir me
console.log(generate());    //generates random word