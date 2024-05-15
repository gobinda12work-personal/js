// // By using map we can update the existing array
// const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const updateArray= arr.map((item) => item * 10)
// console.log(updateArray)

// // We can use chaining method in map filter 
// const arr1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const updateArray1= arr1.map((item) => item * 10)
//                         .map((item) => item + 1)
//                         .filter((item) => item > 40)
// console.log(updateArray1)

// const arr3= [1, 4, 8, 15]
// const newarr3= arr3.map((item) => Number(Math.sqrt(item).toFixed(2)))
// console.log(newarr3)


// Number("123"); // 123
// Number("123") === 123; // true
// Number("12.3"); // 12.3
// Number("12.00"); // 12
// Number("123e-1"); // 12.3
// Number(""); // 0
// Number(null); // 0
// Number("0x11"); // 17
// Number("0b11"); // 3
// Number("0o11"); // 9
// Number("foo"); // NaN
// Number("100a"); // NaN
// Number("-Infinity"); // -Infinity
