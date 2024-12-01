"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");

function incrementCount() {
    count++;  
    renderUpdatedCount();
}
function decrementCount() {
    count--; 
    renderUpdatedCount();
}
function resetCount() {
    count = 0;  
    renderUpdatedCount();
}
function renderUpdatedCount() {
    countElement.innerText = count;  
}
incrementBtn.addEventListener("click", incrementCount);
resetBtn.addEventListener("click", resetCount);
decrementBtn.addEventListener("click", decrementCount);

