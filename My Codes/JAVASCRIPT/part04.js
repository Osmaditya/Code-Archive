// // FOR LOOPS (similar like java and c )

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// printing in reverse order
// for(let i=5; i>=1; i--){
//     console.log(i);
// }

// // // for printintg odd numbers between 1 to 15

// for(let i = 1; i<=15;i=i+2){
//     console.log(i)
// }

// for printing all even numbers between 2 to 10
// for(let i = 2; i<=10;i=i+2){
//     console.log(i)
// }

// INFINITE LOOPS

// MULTIPLICATION TABLE
// for(let i =1; ;i++){     //without any condition it will run infinitely
//     console.log("5 X",i,"=",5*i)

// }

// NESTED LOOP
// for(let i = 1; i<=3;i++){
//     console.log("Outer loop");
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// While loop
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++; 
// }

//break statement
// let i = 1;
// while(i<=5){
//     if(i==3){
//         break; // it will break the loop when i=3
//     }
//     console.log(i);
//     i++; 
// }
// continue statement   
// let i = 1;
// while(i<=5){
//     if(i==3){
//         continue; // it will skip the value of i=3 and continue to next iteration
//     }    
//     console.log(i);
//         i++; 
// }

//iteration over array using for loop
// let fruits = ["apple","banana","orange","mango"];
// for(let i=0;i<fruits.length;i++){    
//     console.log(i,fruits[i]);    
// }

//nested for loop over nested array
// let fruits =[["apple","banana"],
//             ["cherry","guava"],
//             ["mango","litchi"]];
// for(let i=0;i<fruits.length;i++){
//     console.log(`List #${i+1}`);
//     for(let j=0;j<fruits[i].length;j++){ 
//         console.log(fruits[i][j]);
//     }
// }

// FOR OF LOOP: it is used to iterate over iterable objects like arrays, strings, etc.
// it is similar to for each loop in java and c#

// let fruits = ["apple","banana","orange","mango"];
// for(let fruit of fruits){
//     console.log(fruit);  
// }

// for(char of "makemytrip"){
//     console.log(char);  
// }

// nested for of loop
let fruits = [["apple", "banana"],
["cherry", "guava"],
["mango", "litchi"]];
for (let fruit of fruits) {
    console.log(`List #${fruits.indexOf(fruit) + 1}`);
    for (let char of fruit) {
        console.log(char);
    }
}
