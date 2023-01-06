let uzerNumb = Number(prompt('Input number:'));

let message;

if (Number.isNaN(uzerNumb)) {
    message = 'Incorrect format';
} else if (uzerNumb > 10) {
    message = 'Greater';
} else if (uzerNumb < 10) {
    message = 'Less';
} else if (uzerNumb === 10) {
    message = 'Equal';
}
console.log(message);

