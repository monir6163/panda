// h2 change color lightblue
const h2 = document.getElementsByTagName('h2');
for (const colors of h2) {
    colors.style.color = 'lightblue';
}

// backpack section background color change 
document.getElementById('backpack').style.backgroundColor = 'tomato';
document.getElementById('backpack').style.paddingBottom = '15px';

// card class name border radius change 
const cards = document.getElementsByClassName('card');
for (const Card of cards) {
    Card.style.borderRadius = '30px';
}

// onclick handelear console 
function buttonClick () {
    console.log('click')
}

// buy now button remove 

let allButton = document.getElementsByTagName('button');
for(let button of allButton) {
    button.addEventListener('click',(event) => {
        event.target.parentNode.removeChild(event.target)
    })
}

// LET'S STAY IN TOUCH disable
let userInput = document.getElementById('userinput');
let targetButton = document.getElementById('send');

userInput.addEventListener('keyup', (e) => {
    console.log(event.target.value);
    if(e.target.value == 'email') {
        targetButton.removeAttribute('disabled')
    } else {
        targetButton.setAttribute('disabled', true)
    }
})

// mouse over image change 
document.getElementById('shoe1').addEventListener('mouseenter', (e) => {
    e.target.setAttribute('src', './images/shoes/cshoe-1.png')
})
document.getElementById('shoe1').addEventListener('mouseleave', (e) => {
    e.target.setAttribute('src', './images/shoes/shoe-1.png')
})
         //shoe2
document.getElementById('shoe2').addEventListener('mouseenter', (e) => {
    e.target.setAttribute('src', './images/shoes/cshoe-2.png')
})
document.getElementById('shoe2').addEventListener('mouseleave', (e) => {
    e.target.setAttribute('src', './images/shoes/shoe-2.png')
})
           //shoe3
document.getElementById('shoe3').addEventListener('mouseenter', (e) => {
    e.target.setAttribute('src', './images/shoes/cshoe-3.png')
})
document.getElementById('shoe3').addEventListener('mouseleave', (e) => {
    e.target.setAttribute('src', './images/shoes/shoe-3.png')
})

// doblle click backgroundColor change 
let targetArea = document.getElementById('bgcolordomtest');
targetArea.addEventListener('dblclick', (e) => {
    targetArea.style.backgroundColor = 'coral'
})
targetArea.addEventListener('mouseleave', (e) => {
    targetArea.style.backgroundColor = '#FEEAE9'
})