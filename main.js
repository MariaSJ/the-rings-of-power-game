"use strict";

//variables
const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const textBox = document.querySelector('.js_text');

const sureños = 2;
const orcos = 2;
const goblins = 2;
const huargos = 3;
const trolls = 5;

//functions

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


function avatarNumber (){
    if (sureños === getRandomNumber(1));

    if (orcos === getRandomNumber(2));
    
};

function paintText (){
    const randomNumer = getRandomNumber(5);
    const selectValue = select.value;

    if (selectValue > ) {
        textBox.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena';
    }
    if (selectValue < ) {
        textBox.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo';
    }
    if (selectValue === ) {
        textBox.innerHTML = 'Empate';
    }
};



function handleClick(event) {
    event.preventDefault();
    getRandomNumber();
    avatarNumber();
    paintText();
}



//events

btn.addEventListener('click', handleClick);