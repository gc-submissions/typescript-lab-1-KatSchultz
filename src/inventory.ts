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
    product: { name: "LED", price: 100 },
    quantity: 20,
  },
];

function calcInventoryValue(arr: InventoryItem[]) {}
