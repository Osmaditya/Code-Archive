import "./Item.css";
import Price from "./Price";
function Item({ title, idx }) {
  let oldPrices = ["10,999", "11,666", "18,999", "42,991"];
  let newPrices = ["12,999", "21,666", "33,999", "16,981"];
  let descriptions = [
    ["Intutive surface", "5 prog buttons"],
    ["wireless", "Reliable"],
    ["500 DPI", "Flexible"],
    ["Reliable and robust", "Versatile"],
  ];

  return (
    <div className="Item">
      <h4>{title}</h4>
      <p>{descriptions[idx][0]}</p>
      <p>{descriptions[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Item;
