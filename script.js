const percent = document.querySelector('.perc');
const ce = document.querySelector('.ce');
const c = document.querySelector('.c');
const del = document.querySelector('.del').addEventListener('click', () => {
    input.textContent = "";
});

// const divOper = document.querySelector('.div');
// const multiOper = document.querySelector('.multi');

// const subtrOper = document.querySelector('.subtr');

// const zero = document.querySelector('.zero');
// const one = document.querySelector('.two');
// const two = document.querySelector('.three');
// const three = document.querySelector('.one');
// const four = document.querySelector('.four');
// const five = document.querySelector('.five');
// const six = document.querySelector('.six');
// const seven = document.querySelector('.seven');
// const eight = document.querySelector('.eight');
// const nine = document.querySelector('.nine');
const nbs = document.querySelectorAll('.zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
const operators = document.querySelectorAll('.div, .multi, .add, .subtr');

const comma = document.querySelector('.comma');

const equals = document.querySelector('.equals');


const screen = document.querySelector('.screen');
let input = document.querySelector('#input');
let btns = document.querySelectorAll('.btn');

let calculation = [];
let number;

nbs.forEach(nb => {
    nb.addEventListener('click', (e) => {
    number = e.target.innerText;
    console.log(number);
    input.value += number;
    calculation.push(number);
    });

})

let addNb = [];
const addOper = document.querySelector('.add').addEventListener('click', () => {
    let numberStr = calculation.join('');
    let numberInteg = parseInt(numberStr);

    console.log(numberInteg);

    addNb.push(numberInteg);
    
    console.log(addNb);
    calculation = [];
})