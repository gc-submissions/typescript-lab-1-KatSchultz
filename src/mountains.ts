export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(arr: Mountain[]) {
  if (arr !== []) {
    let max = arr[0].height;
    let tallestMountain: string = arr[0].name;
    for (let elem of arr) {
      if (max < elem.height) {
        max = elem.height;
        tallestMountain = elem.name;
      }
    }
    return tallestMountain;
  } else {
    return [];
  }
}

const tallest = findNameOfTallestMountain(mountains);
console.log("Tallest mountain:", tallest);
