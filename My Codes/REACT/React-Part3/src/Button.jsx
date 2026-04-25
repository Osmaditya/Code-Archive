function handleClick(event){
    console.log("hello");
    console.log(event);
}
function handleMouseOver(){
    console.log("Bye");
}
function handleDblClick(){
    console.log("You double clicked");
}
function Button() {                     //onClick is camelCase and Pass function reference, not function call      
  return (
    <div>
      <button onClick = {handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores asperiores 
        quaerat sed nisi voluptatem libero minima officiis fugiat! A dolores inventore quasi.
         Rerum voluptatem expedita, animi itaque laudantium quam ex!</p>
         <button onDoubleClick={handleDblClick}>Click</button>
    </div>
  )
}

export default Button
