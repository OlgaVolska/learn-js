let uzerNumb = Number(prompt('Input integer number:'));

let message;
if (!Number.isInteger(uzerNumb) || uzerNumb > 7) {
    message = 'Incorrect format';
} 
switch (uzerNumb) {
    case 1: {
        message = 'Monday';
        break;
    }   
    case 2: {
        message = 'Tuesday';
        break;
    } 
    case 3: {
        message = 'Wednesday';
        break;
    }
    case 4: {
        message = 'Thursday';
        break;
    } 
    case 5: {
        message = 'Friday';
        break;
    } 
    case 6: {
        message = 'Saturday';
        break;
    } 
    case 7: {
        message = 'Sunday';
        break;
    } 
}

console.log(message);