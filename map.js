// const products = [
//   { name: 'iPhone12', color: ['black', 'blue', 'white'], price: 120000 },
//   { name: 'Samsung', color: ['black', 'red', 'white'], price: 120000 },
//   { name: 'OnePlus', color: ['black', 'red', 'blue'], price: 120000 },
// ];

const products = [45, 5, 89, 23, 3, 12, 1, 7];

const mapped = [];

const compare = value => mapped.push(value * 2);

// const compare = value => {
//   if (value > 10) {
//     mapped.push(value);
//   }

//   // mapped.push(value);
// };

for (let i = 0; i < products.length; i++) {
  compare(products[i]);
}

// function compare(value) {
//   if (value > 10) {
//     mapped.push(value);
//   }
// }

// const compare = value => {
//   if (value > 10) {
//     mapped.push(value);
//   }
// };

console.log(mapped);
// const mapped = products.map(x => x.color);

// ForEach
// const item = mapped.forEach(item => {
//   console.log(item );
// });

// const mapp = mapped.map(item => item[1] + 'color');

// const mapp = mapped.map(item => {
//   return item + 'color';
// });

// console.log(mapped);
// console.log(products);
// console.log(mapp);
// console.log(item);
