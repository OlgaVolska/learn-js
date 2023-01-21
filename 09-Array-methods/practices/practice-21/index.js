

let arr = [2, 4, 9, 3, 8, 1];

function myFind(array, fn) {
    for (let value of array) {
       if (fn(value)) {
        return value;
       }
    }
    return undefined;
}
       
         //                       аргументы
console.log(myFind(arr, (value) => value > 5));
console.log(myFind(arr, (value) => value === 7));


