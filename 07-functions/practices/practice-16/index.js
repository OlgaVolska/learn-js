
let result = getName(prompt('What your name?'));
console.log(result);

function getName(uzerName) {
    return uzerName;
}


let result1 = sayHello(result);
function sayHello(name) {
    console.log(`Hello, ${name}`);
    return name;
}


