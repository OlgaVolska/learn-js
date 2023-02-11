function Article(author, name, countOfWords) {
    this.author = author;
    this.name = name;
    this.countOfWords = countOfWords;
    this.changeCountOfWords = function(number) {
       this.countOfWords = number;
    },
    this.toString = function() {
        let articleStr =
         `author: ${this.author}, name: ${this.name}, countOfWords: ${this.countOfWords}`;     
        return articleStr;
    }   
};

let article1 = new Article("Ali Haiderh", "String concatenation", 5129);
let article2 = new Article('Olga', 'Letters', 676);
console.log(article1);
console.log(article2);

article1.changeCountOfWords(444);
article2.changeCountOfWords(89);

console.log(article1.toString());
console.log(article2.toString());