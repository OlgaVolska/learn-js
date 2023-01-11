let arr1 = ["unimprovable", 0, "perfect"];
let arr2 = [3, true, "integer"];


function getStringFromArrays(arr1, arr2){
    
    let arr3 = arr1.concat(arr2);
    let str = [];
    //  console.log(str);  
    
     for (let i = 0; i < arr3.length; i++) {        
        if (arr3[i].length > 5) {
            str.push(arr3[i]);              
        }                     
    }
    let concat = str.join(', ');
    return concat; 
}

console.log(getStringFromArrays(["unimprovable", 0, "perfect"], [3, true, "integer"]));
