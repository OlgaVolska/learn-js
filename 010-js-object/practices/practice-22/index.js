const triangle = {
    a: 10,
    b: 10,
    c: 10,
    perimetr() {
        return this.a + this.b + this.c;
    },
    equilateral(){
        return  (this.a === this.b &&
                 this.a === this.c &&
                 this.b === this.c);   
    },
    toString(variant) {
        let result = 
        `Triangle v. ${variant}
        A: ${this.a}, B: ${this.b}, C: ${this.c}
        Perimetr: ${this.perimetr()}
        Equilateral: ${this.equilateral()}`;

        return result;
    }, 
};

console.log(triangle.toString(1));
triangle.a = 10; 
console.log(triangle.toString(2));
console.log(triangle.perimetr());



