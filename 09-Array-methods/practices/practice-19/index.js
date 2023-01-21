
let elements = [1, true, 42, "red", 64, "green", "web", new Date(), -898, false];
console.log(elements);

let stringElements = elements
.filter((element) => typeof element === 'string');
console.log(stringElements);











// let array = [2, 4, 6, 1];

// function myMap(array, fn) {
//     let result =[];
//     for (let value of array) {
//         result.push(fn(value));
//     }
//     return result;
// }


// let newArray = myMap(array, (value) => value + 2)   //  [4, 6, 8, 3];
// console.log(newArray);
