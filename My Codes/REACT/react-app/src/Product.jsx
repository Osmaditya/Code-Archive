import "./Product.css"

function Product({title,price,arr,obj}) {   //title and proce are React Props           //price =1 (default props)
  return (  //jsx convention k according root el(div) ke className same hoga function or file name k (Product)
    <div className = "Product"> 
        
      <h2>Product Name : {title}</h2>
      <p>Price of the product : {price}</p>
      <p>{arr}</p>
      <p>{obj.b}</p>
    </div>
  );
}

export default Product ;