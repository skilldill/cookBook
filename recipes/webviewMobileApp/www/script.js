const counter = document.querySelector('#counter');
const decreaseBtn = document.querySelector('#decreaseBtn');
const increaseBtn = document.querySelector('#increaseBtn');

let count = 0;

function incrementCounter() {
    count += 1;
    counter.textContent = count;
}

function decrementCounter() {
    count -= 1;
    counter.textContent = count;
}

increaseBtn.addEventListener('click', incrementCounter);
decreaseBtn.addEventListener('click', decrementCounter);