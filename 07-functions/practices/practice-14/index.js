let lessThanThreeArgumentsMessage = '3 arguments expected';

function getStrings(str1, str2, str3) {

    console.log(`"${str1}","${str2}","${str3}"`);
    
    if (arguments.length < 3) {
        return lessThanThreeArgumentsMessage;
    } 

    for (let value of arguments) {
        if (typeof value !== 'string') {
           String(value);
        }
    }
    let stringConcat = str1 + str2 + str3;
        return stringConcat.length;      
}    

getStrings('Mercury', 'Saturn', 'Mars');
console.log(getStrings(true, 'Saturn', 'Mars')); 






// const noArgumentsMessage = 'No arguments';
// const noNumericArgumentMessage = 'No numeric argument';

// function argumentMultiplicator(...parameters) {
//     if (parameters.length === 0) {
//         return noArgumentsMessage;
//     }

//     let result = [];
//     let coefficient = 100;
    
//     for (value of parameters) {
//         if (typeof value === 'number') {
//            result.push(value * coefficient);
//         } 
//         if (result.length === 0) {
//             return noNumericArgumentMessage;
//         }
//     }   
//     return result;
// }

// console.log(argumentMultiplicator());
// console.log(argumentMultiplicator("hello"));
// console.log(argumentMultiplicator(9, "20", 1, 3.4, true));