import "./App.css"

function Desc(){  //own component bnaya
  return <h3>I am the description</h3>
}

function App() {
  //component ko render kra rhe     <Desc> </Desc>  or <Desc /> ese likh skte jaha bhi comp. use krna ho
  return  (
    <div>
      <Desc/>
    </div>
 
  );

   //ishme jab div me multiple function render kara rhe ho tab return() lagana jaruri haii wrna ushe lagage ki tum kuch return hi nhi kara rhe
}

export default App
