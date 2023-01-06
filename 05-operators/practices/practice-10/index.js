let password = prompt('Input the password:');
let message;

if (password.length >= 6 && password !== 'qwerty' && password !== '123123') {
    message = 'Strong';  
} else if (password.length >=5 || password === 'qwerty' || password === '123123') {
    message = 'Middle';
} else {
    message = 'Weak';
}

console.log(message);