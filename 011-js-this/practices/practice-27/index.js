const MORSE = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": " ",
    };

function Encoder(message) {
    this.message = message.toUpperCase();
    this.encodeMorse = function(){
        let result = [];
        for (let word of this.message){
            result.push(MORSE[word]);
        }
        return result.join('  ');
    }    
}

let encoder = new Encoder('I love you');
console.log(encoder.message);
console.log(encoder.encodeMorse());
  