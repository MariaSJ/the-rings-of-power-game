"use strict";

//variables
const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const textBox = document.querySelector('.js_text');

let suereños = 2;
let orcos = 2;
let goblins = 2;
let huargos = 3;
let trolls = 5;

//functions

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

    
function handleClick(event) {
    event.preventDefault();
}



//events

btn.addEventListener('click', handleClick);