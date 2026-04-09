import Item from "./Item.jsx";

function ItemTab() {
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
    };
  return (
    <div style = {styles}>
      <Item title="Logitex Mx Master" idx={0} />
      <Item title= "Apple2x nano" idx={1} />
      <Item title = "Guvi 5g pro" idx={2}/>
      <Item title = "Zebronics 43cc" idx={3} />
    </div>
  )
}

export default ItemTab
