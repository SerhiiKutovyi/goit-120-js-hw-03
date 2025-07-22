// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits);
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'banana', 'pear']));

// const fruitsLastElement = fruits.length - 1;
// console.log(fruitsLastElement);
// console.log(fruits[fruitsLastElement]);

// function getLastElementMeta(array) {
//   const lastElement = array.length - 1;
//   const valueElement = array[lastElement];
//   return [lastElement, valueElement];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if (emptyArray) {
//   console.log('if is in progress');
// } else {
//   console.log('else is not performed');
// }

// if (nonEmptyArray) {
//   console.log('if is in progress');
// } else {
//   console.log('else is not performed');
// }

// function getLength(array) {
//   const arr = array.join('').length;
//   console.log(arr);
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
