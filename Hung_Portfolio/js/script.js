console.log("Hello, Portfolio!");



// const fruits = ["apple", "banana", "mango"];

// fruits.forEach((index, name) => {console.log(`${index} : ${name}`);});


// function filterGreaterThan10(arr) {
//     return arr.filter(val => val > 10);
// }

// console.log(filterGreaterThan10([1, 22, 3, 34, 5, 6, 10]));


// const myProducts = [
//   { name: "A", price: 10 },
//   { name: "B", price: 20 },
//   { name: "C", price: 30 },
// ];

// function totalPrice(products)  {
//     return products.reduce((sumPrice, thisProduct) => sumPrice + thisProduct.price, 0);
// }

// console.log(totalPrice(myProducts));


// const students = [
//   { name: "Nam", age: 20 },
//   { name: "Linh", age: 19 },
//   { name: "Hà", age: 21 },
// ];

// function sortStudents(studentsArr) {
//     return [...studentsArr].sort((a,b) => a.age - b.age);
// }

console.log(sortStudents(students));

// function maxInArray(arr) {
//     return Math.max(...arr);
// }

// console.log(maxInArray([1, 2, 3, 4, 5, 6, 10]));


// function isEven(num) {
//     return num %  2 == 0 ;
// }

// console.log(isEven(1));
// console.log(isEven(2));

// function countOccurences(arr) {
//     const count = {};
//     arr.forEach(item => {
//         count[item] = (count[item] || 0) +1;
//     });
//     return count;
// }

// function countOccurences(arr) {
//     return arr.reduce((count, item)  => {
//         count[item] = (count[item] || 0) + 1;
//         return count;
//     }, {});
// }

// console.log(countOccurences([1,2,2,3,3,3,3]));

// // --------------------------------------------------------------------------------
// let createUser = (name, age) => ({name, age});
// console.log(createUser("Hoa", 21)); // { name: 'Hoa', age: 21 }

// --------------------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6]

// let sumArr = arr.reduce((sum, thisNum) => sum + thisNum, 0);
// console.log(sumArr)



// --------------------------------------------------------------------------------
// const employees = [
//   { name: "A", salary: 500 },
//   { name: "B", salary: 700 },
//   { name: "C", salary: 800 }
// ];

// let sumSalary = employees.reduce(
//     (sumSal, thisEm)  => sumSal  + thisEm.salary, 0
// );
// console.log(sumSalary)


// --------------------------------------------------------------------------------
// let greet = name =>  `Hello ${name}`;

// console.log(greet("dfilsafbas"));



// --------------------------------------------------------------------------------
// const products = [
//   { name: "Book", price: 100 },
//   { name: "Pen", price: 20 },
//   { name: "Pencil", price: 10 }
// ];

// const newProducts = products.map((p) => ({
//         ...p,
//         discountPrice: p.price * 0.9
//     }));

// console.log(newProducts);


// --------------------------------------------------------------------------------
// const myArr = [1,2,3,4,5,6,7,8];

// function sum_chan(arr)  {
//     chanArr = arr.filter((value)  => {
//         return value % 2 == 0;
//     })
//     mySum = chanArr.reduce((sum, currValue)  => {
//         return sum + currValue;
//     }, 0)
//     return mySum;
// };


// const a = sum_chan(myArr);

// console.log(a);


// function sumEven(arr) {
//   return arr
//     .filter(n => n % 2 === 0) // lọc số chẵn
//     .reduce((a, b) => a + b, 0); // cộng dồn từ 0
// }

// console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12


// --------------------------------------------------------------------------------
// const myString = 'fbkjsdalf fjsdfbhlkja fbkjsdafbsajlk fbsjlkdasbafka fbajsdfba';

// function countString(str) {
//     return str
//         .split(' ')
//         .length;
// };

// --------------------------------------------------------------------------------
// console.log(countString(myString))


// const students = [
//     { name: "Hoa", score: 8 },
//     { name: "Minh", score: 6 },
//     { name: "Lan", score: 9 },
//     { name: "Tú", score: 7 }
// ];

// const goodStudents = students
//     .filter((student) => {return student.score >= 8})
//     .map((s) => {return s = `${s.name} đạt ${s.score} điểm`});

// console.log(goodStudents)

// const goodStudents = students
//   .filter(s => s.score >= 8)
//   .map(s => `${s.name} đạt ${s.score} điểm`);

// console.log(goodStudents);