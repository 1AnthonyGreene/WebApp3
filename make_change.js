"use strict";

const $ = selector => documnt.querySelector(selector);

function processEntry() {
    const userEntry = parseInt($("#cents").value);
    
    if (isNaN(userEntry) || userEntry < 0 || userEntry > 99) {
        alert("Please enter a number between 0 and 99.");
    } else {
        makeChange(userEntry);
    }
}

function makeChange(cents) {
    const quarters = Math.floor(cents / 25);
    cents %= 25;
    const dimes = Math.floor(cents / 10);
    cents %= 10;
    const nickels = Math.floor(cents / 5);
    cents %= 5
    
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});
