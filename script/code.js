//Variables
const screen = document.querySelector('#output')
const clears = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')
const decimal = document.querySelector('.decimal')
const equal = document.querySelector('#equal')
const numbers = document.querySelector('.button')
let checkArray = [];

//Numbers
function display(value) {
    if(value == '.' && checkArray.includes('.')){
        return;
    } else if(value == '+' || value == '-' || value == '*' || value == '/'){ 
    } 
    else {
        screen.value += value;
        checkArray.push(value);
    } 
}

//Reiteration of Operators
document.querySelector('#add')
.addEventListener('click', (e)=>{
    let inputArray = screen.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '+'){
        return;
    } else {
        screen.value += e.target.innerHTML;
        checkArray = [];
    }
    })

    document.querySelector('#subtract')
    .addEventListener('click', (e)=>{
        let inputArray = screen.value.split('');
        console.log(inputArray)
        if(inputArray[inputArray.length-1] === '-'){
            return;
        } else {
            screen.value += e.target.innerHTML;
            checkArray = [];
        }
    })

document.querySelector('#divide')
.addEventListener('click', (e)=>{
    let inputArray = screen.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '/'){
        return;
    } else {
        screen.value += e.target.innerHTML;
        checkArray = [];
    }
    })

    document.querySelector('#multiply')
.addEventListener('click', (e)=>{
    let inputArray = screen.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '*'){
        return;
    } else {
        screen.value += e.target.innerHTML;
        checkArray = [];
    }
})

//Clear
clears.addEventListener('click', ()=> {
    clear(); 
})
function clear() {
    checkArray = [];
    screen.value = "";
}

//Backspace
backspace.addEventListener('click', ()=>{
    let output = screen.value;
    screen.value = output.slice(0, -1);
})

//Equal
equal.addEventListener('click', ()=> {
    let output = eval(screen.value)
    screen.value = output.toFixed(2);
})