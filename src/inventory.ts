import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

function calcInventoryValue(arr: InventoryItem[]) {
  const value = arr.reduce((acc, elem) => {
    console.log(
      `price: ${elem.product.price} * quantity: ${elem.quantity} = ${
        elem.product.price * elem.quantity
      }`
    );
    return acc + elem.product.price * elem.quantity;
  }, 0);
  console.log("value", value);
  return value;
}

calcInventoryValue(inventory);
