//1
let numbers = [];

let lengthOfNumbers = 10;
for (let i = 0; i < lengthOfNumbers; i++) {
    let random = Math.floor(Math.random() * 100);
    numbers.push(random);
}
console.log(numbers);

//2
let sumOfNumbers = 0;
for (let n of numbers) {
    sumOfNumbers += n;
}
console.log(sumOfNumbers);

numbers.push(sumOfNumbers);
console.log(numbers);

//3

numbers.pop(sumOfNumbers);
console.log(numbers);

//4 
//Добавьте в начало массива новый элемент, который меньше на единицу чем самый
//минимальный элемент массива numbers.
let numbMin = Math.min(...numbers);// определяем минимальный элемент
console.log(numbMin);

let lessNumbMin = numbMin - 1; // элемент, меньший минимального на 1

numbers.unshift(lessNumbMin); // добавляем в массив
console.log(numbers);

//5
//Создайте новый массив, элементы которого должны содержать только нечетные
//элементы из массива numbers .

let oddArray = [];

for (let n of numbers) {
    if (n % 2 ==! 0) {
        oddArray.push(n);
    }
}

console.log(oddArray);

//6
oddArray.shift();
console.log(oddArray);

//7 
oddArray.sort();
console.log(oddArray);

//8
for (let n of oddArray) {
    if (n % 3 === 0) {
       console.log(n);
    }
}

