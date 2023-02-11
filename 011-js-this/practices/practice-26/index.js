function Article(author, name, countOfWords) {
        this.author = author;
        this.name = name;
        this.countOfWords = countOfWords;
        this.changeCountOfWords = function(number) {
           this.countOfWords = number;
        },
        
        this.addMethodToObject = function(func, name) {
            if (typeof func !== 'function') {
                return 'func is not a function';
            }
            else if (typeof name !== 'string' || name === '') {
                return 'Error: invalid name';
            } 
            
        this[name] = func;         
            return 'Success: method ${name} was added to the obj';               
        },
    
        this.toString = function() {
            let articleStr = 
            `author : ${this.author}
             name: ${this.name}
             countOfWords: ${this.countOfWords}`;
             
            return articleStr;
        }  
     
    };
       
    let article2 = new Article("Timothy Robards", "Understanding JSON", 3213);
    
    let getPropertyValue = function(propertyName) {
        if (propertyName in this) {
            return this[propertyName];
        }
        return 'Error: ${propertyName} is not a part of this object';    
    };
    
    console.log(article2.addMethodToObject(getPropertyValue, "getPropertyValue"));
    
    console.log(article2.getPropertyValue("author"));
    console.log(article2.getPropertyValue("auuu"));