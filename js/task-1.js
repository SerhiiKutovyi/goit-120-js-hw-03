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

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   return array.slice(0, index + 1);
// }
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));

// function createArrayOfNumbers(min, max) {
//   let array = [];

//   for (let i = min; i <= max; i += 1) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(createArrayOfNumbers(1, 3));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const e of order) {
//     total += e;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   let total = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       total.push(i);
//     }
//   }
//   return total;
// }

// console.log(getEvenNumbers(3, 11));

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'apple'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));

// function getCommonElements(array1, array2) {
//   let newArr = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function calculateTotalPrice(order) {
//   let nam = 0;
//   for (const element of order) {
//     nam += element;
//   }
//   return nam;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);
