export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "shampoo", price: 6 },
  {
    name: "loofah",
    price: 4,
  },
  {
    name: "bananas",
    price: 2,
  },
];

export function calcAverageProductPrice(arr: Product[]) {
  if (arr.length !== 0) {
    const average = arr.reduce((a, elem) => {
      return a + elem.price;
    }, 0);
    return average / arr.length;
  }
  return 0;
}
const averagePrice = calcAverageProductPrice(products);
console.log("Average price:", averagePrice);
