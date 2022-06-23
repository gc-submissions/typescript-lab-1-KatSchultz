export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "shampoo", price: 5 },
  {
    name: "loofah",
    price: 3,
  },
  {
    name: "bananas",
    price: 2,
  },
];

export function calcAverageProductPrice(arr: Product[]) {
  if (arr !== []) {
    const average = arr.reduce((a, elem) => {
      return a + elem.price;
    }, 0);

    return average / arr.length;
  } else return 0;
}

calcAverageProductPrice(products);
