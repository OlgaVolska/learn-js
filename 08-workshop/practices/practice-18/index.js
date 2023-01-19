

function removeNegativeArrayElements(array) {
    let newArray = [];
    for (let value of array) {    
        if (value >= 0 || typeof value === 'string') {
           newArray.push(value);
        }
    }
    return newArray;
}
    
console.log(removeNegativeArrayElements([-9, 2, 3, 0, -28, "value"]));
console.log(removeNegativeArrayElements([-9, -21, -12]));
console.log(removeNegativeArrayElements(["-102", 102]));
