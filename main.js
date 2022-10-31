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

function avatarNumber(x){
    if (x === 1){
        return sureños;
    }
    if (x === 2){
        return orcos;
    }
    if (x === 3){
        return goblins;
    }
    if (x === 4){
        return huargos;
    }
    if (x === 5){
        return trolls;
    }  
};

function paintText (){
    const randomNumer = getRandomNumber(5);
    const avatarRandom = avatarNumber(randomNumer);
    const selectValue = select.value;

    if (selectValue > avatarRandom) {
        textBox.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena';
    }
    if (selectValue < avatarRandom) {
        textBox.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo';
    }
    if (selectValue === avatarRandom) {
        textBox.innerHTML = 'Empate';
    }
};

function handleClick(event) {
    event.preventDefault();
    getRandomNumber();
    paintText();
}

//events

btn.addEventListener('click', handleClick);