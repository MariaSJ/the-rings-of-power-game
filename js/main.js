"use strict";

//variables
const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const btnReset = document.querySelector('.js_btn_reset');
const textBox = document.querySelector('.js_text');
const userPointsElement = document.querySelector('.js-counter-user');
const pcPointsElement = document.querySelector('.js-counter-pc'); 

//variables bonus

let userPoints = 0;
let pcPoints = 0;
let moves = 0;

//functions

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function avatarNumber(x) {
    const sureños = 2;
    const orcos = 2;
    const goblins = 2;
    const huargos = 3;
    const trolls = 5;

    if (x === 1) {
        return sureños;
    }
    else if (x === 2) {
        return orcos;
    }
    else if (x === 3) {
        return goblins;
    }
    else if (x === 4) {
        return huargos;
    }
    else (x === 5); {
        return trolls;
    }
};

function paintText (){
    const randomNumer = getRandomNumber(5);
    const avatarRandom = avatarNumber(randomNumer);
    const selectValue = parseInt(select.value);

    if (selectValue > avatarRandom) {
        textBox.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena';
        userPoints++;
    }
    else if (selectValue < avatarRandom) {
        textBox.innerHTML = '¡Ha ganado el Ejército del Mal! Vuelve a intentarlo';
        pcPoints++;
    }
    else if (selectValue === avatarRandom) {
        textBox.innerHTML = 'Empate';
    }
}

//BONUS:
/*
- calcular los puntos del usu0ario y de ordenador (contador usuario y contador ordenador)
- contar las partidas (10 movimientos) contador de movimientos
- cuando llegue a 10 se esconda el boton batalla y aparezca botón reinciar juego: classList
- poner todos los contenedores a 0
- Mostrar quién ha ganado
*/

function renderScore() {
    userPointsElement.innerHTML = `Jugador/a: ${userPoints}`;
    pcPointsElement.innerHTML = `Computadora: ${pcPoints}`;
}

function gameOver() {
    moves++;
    console.log(moves);
    if (moves === 10){
        btn.classList.add("hidden");
        btnReset.classList.remove("hidden");
        if (userPoints > pcPoints) {
            textBox.innerHTML = "¡Has ganado!";
        } else if(userPoints < pcPoints)  {
            textBox.innerHTML = "Has perdido :(";
        } else {
            textBox.innerHTML = "¡Empate!";
        }
    }
}

function handleClick(event) {
    event.preventDefault();
    paintText();
    renderScore();
    gameOver();
};

function handleReset(event) {
    event.preventDefault();
    btn.classList.remove("hidden");
    btnReset.classList.add("hidden");
    userPoints = 0;
    pcPoints = 0;
    moves = 0;
    textBox.innerHTML = "¡Batalla!";
    renderScore();
}


//events

btn.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleReset);