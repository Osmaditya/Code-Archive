import "./Product.css";

function Product({ title, price, arr, obj }) {
  //title and proce are React Props           //price =1 (default props)
  // let isDiscount = price > 30000 ? "Discount of 5%" : "";  //conditionals

  let styles = { backgroundColor: price > 30000 ? "maroon" : "" }; //DYNAMIC COMPONENT STYLING

  return (
    //jsx convention k according root el(div) ke className same hoga function or file name k (Product)
    <div className="Product" style={styles}>
      <h2>Product Name : {title}</h2>

      <p>Price of the product : {price}</p>

      {/* 
      <p>                     //Accepting arrays
        {arr.map((ele) => (
          <li>{ele} </li>
        ))}
      </p>

        <p>{obj.b}</p>        //Accepting object  */}

      {price > 30000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}

export default Product;
