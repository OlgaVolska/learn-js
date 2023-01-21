
function getRandomArray() {
    let random = [];
    let lengthRandom = 10;
    for (let i = 0; i < lengthRandom; i++){
    random.push(Math.floor(Math.random() * 100));
    }
   return random; // массив случайных чисел от 0 до 100
}

let arrayOfNumbers = getRandomArray();
console.log(arrayOfNumbers);

let newArray = arrayOfNumbers.map(number => number * 2);
console.log(newArray);

let sorted = newArray.sort((numb1, numb2) => numb2 - numb1);
console.log(sorted); 


