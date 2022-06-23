import { Product } from "./products";

export interface InventoryItem {
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

export function calcInventoryValue(arr: InventoryItem[]) {
  const value = arr.reduce((acc, elem) => {
    return acc + elem.product.price * elem.quantity;
  }, 0);
  return value;
}

const inventoryValue = calcInventoryValue(inventory);
console.log("Inventory value: ", inventoryValue);
