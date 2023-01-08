let arr =['455', 87.15, true, undefined, null, 'false', [], {}];

for (let value of arr) {
    if (value === null) {
        console.log('null');
    }     
    console.log(typeof value); 
}

for (let value of arr) {
    console.log(value + 6);
}
