console.log(`Hello world from JavaScript`);
// function sum(a, b) {
//     return a + b;
// }

// let x = sum(3, 8);
// console.log('Sum of a and b: ', x);

// let sum = (a, b) => {
//     return a + b;
// }

// console.log(`Use Arrow Function: `, sum(4, 8))

//CHƯƠNG 5: ARRAY

//Filter and Find

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
    { name: "Nguyen Hai Nam", age: 20 },
    { name: "Nguyen Ngoc Linh", age: 23 },
    { name: "Tran Thu Thao", age: 19 },
    { name: "Do Phuong Ly", age: 16 },
    { name: "Nguyen Hai Nam", age: 40 },

]

//Filter will return an array of values
let Filter = arr.filter((Element, Index) => {
    return Element && Element.name === "Nguyen Hai Nam";
})

console.log(`Result of function filter: `, Filter);

//Find will return an element

let Find = arr.find((Element) => {
    return Element && Element.name === "Nguyen Hai Nam";
});

console.log(`Return of function find: `, Find);