import Product from "./Product.jsx";
let options = ["durable","hi-tech","fast"]  // passing array as props to product component

function ProductTab(){
    return (
        <div>
            <hr />
            <Product title = "Phone"
             price = {10000} 
             arr = {options}    //passing arrays
             obj= {{a:"best",b: "reliable"}} /> 
            {/* <Product title = "Laptop" price = {30000}/>
            <Product title = "TV" price = {50000}/> */}
            <hr />
        </div>  // title and price are React props : information that pass to your JSX tag like parameters 
    );
};

export default ProductTab;