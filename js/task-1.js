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

function getLastElementMeta(array) {
  const lastElement = array.length - 1;
  const valueElement = array[lastElement];
  return [lastElement, valueElement];
}

console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
