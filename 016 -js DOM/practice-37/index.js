//функцию, которая изменяет фоновый цвет текста последнего параграфа 
//функцию, которая меняет блоки footer и main местами.

let allParagraph = document.getElementsByTagName('p');
let footer = document.getElementById('footer');
let wrapper = document.getElementById('wrapper');

function changeBackgroundLastParagraph() {    
   allParagraph[2].style.background = 'violet';         
}

function swapFooterWithMain() {
    wrapper.append(footer);
}

changeBackgroundLastParagraph();
swapFooterWithMain();