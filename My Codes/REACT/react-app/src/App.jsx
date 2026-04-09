import "./App.css";
import  Title  from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

function Desc(){  //own component bnaya
  let name = "Description"; //variable bnaya
  return <h3>I am the {name.toUpperCase()}</h3> //jsx with {} to implement pure Js code
}

function App() {
  //component ko render kra rhe     <Desc> </Desc>  or <Desc /> ese likh skte jaha bhi comp. use krna ho
  return  (     //multiple components ko render krne k liy unhe div k anadar likh do aur div ko return kr do
     <div id ="App" className="Appclass">    
      <Title />       
      <Desc/>
      <ProductTab />
    </div>  //class js me reserved word hai for oops isliye className use krte hain & all tags must be closed properly
 
  );

   //ishme jab div me multiple function render kara rhe ho tab return() lagana jaruri haii wrna ushe lagage ki tum kuch return hi nhi kara rhe
}

export default App
