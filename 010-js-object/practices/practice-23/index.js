const biography = {
    firstName: 'Olga',
    lastName: 'Volska',
    age: 30,
    description: 'A person who learns a programming language',
    isMarried: false,
    cleanData() {   
        for (let key in biography) {            
            if (typeof biography[key] === 'string') { // получили три строки
                biography[key] = '';                   
            }  
            if (typeof biography[key] === 'number') { 
                biography[key] = 0;                                   
            }  
            if (typeof biography[key] === 'boolean') { 
                biography[key] = undefined;
            }                                       
        }         
    },

    toString(variant) {
        let result  = 
            `Biography v ${variant}
            firstName: ${this.firstName}
            lastName: ${this.lastName}
            age: ${this.age}
            description: ${this.description}
            isMarried: ${this.isMarried}`;           
        
        return result;             
    },
};
    


console.log(biography.toString(1));
biography.cleanData(toString());
console.log(biography.toString(2));







    
