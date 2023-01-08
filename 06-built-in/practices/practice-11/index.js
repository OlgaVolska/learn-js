let string1 = "Aquamarine Black Blue Brown Chocolate ";
let string2 = "Green Lime Olive Orange Purple ";
let string3 = "Red Tomato Violet White Yellow";

let colors = string1.concat(string2, string3);
console.log(`Colors:\n${colors}`);

//array
let words = colors.split(' '); // return array
console.log(words);
console.log(`Count of words: ${words.length}`);


//Создайте массив newWords , который должен содержать те элементы массива words ,
//длина которых равна 6 или более символов.

let newWords = [];

for (let value of words) {
    if (value.length >= 6) {
        newWords.push(value);
    }    
}
console.log(newWords);

let newColors = newWords.join(',');
console.log(`New colors:\n${newColors.toLowerCase()}`);

 


