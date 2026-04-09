// Title.jsx file bna rhe hain jisme Title component bana rhe hain

function Title(){
    return <h1>This is the Title of Page</h1> 
}
//Title component ko export krna hai taki ise dusre file me import kr sake

// DEFAULT export krne se single component ko  kisi bhi file me import kr sakte hain bina curly braces ke
//agar named export krte to ise import karne k liy curly braces ka use krna

export default Title ;

//ab is Title component ko App.jsx me import krna hai


// //***********************************NAMED EXPORT*****************************************
// // y tab use krte hain jab hume ek file me multiple components ya functions ko export krna ho

// export function Title(){    // agar ise named export krte to ise import karne k liy curly braces ka use krna padta
//     return <h1>This is the Title of Page</h1> 
// } // agar ise named export krte to ise import karne k liy curly braces ka use krna padta

// //import { Title } from './Title.jsx'; // ise import karne ka tarika hota   in App.jsx file