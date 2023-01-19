
function getMaximum(...args) {
   if (args.length === 0) {
    return undefined;
   }

    let newArray = [];
    for (let arg of args) {
        if (typeof arg === 'number') {
            newArray.push(arg);
        }
    }
   let maxEl = Math.max(...newArray);   
   return maxEl;      
}

console.log(getMaximum(true, 20, "value", 119, 84));
console.log(getMaximum());

