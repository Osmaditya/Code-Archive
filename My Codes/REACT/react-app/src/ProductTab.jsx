import Product from "./Product.jsx";
import Msg from "./msg.jsx";

function ProductTab() {
  let options = ["durable", "hi-tech", "fast"]; // passing array as props to product component

  return (
    <div>
      <hr />
      <Product
        title="Phone"
        price={10000}
        //  arr = {options}    //passing arrays
        //  obj= {{a:"best",b: "reliable"}} // passing object
      />
      <Product title="Laptop" price={30000} />
      <Product title="TV" price={50000} />
      <hr />
      <Msg name="Aditya" colr="violet" />
      <Msg name="Rishi" colr="yellow" />
      <hr />
    </div> // title and price are React props : information that pass to your JSX tag like parameters
  );
}

export default ProductTab;
