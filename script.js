'use strict';

const check = document.querySelector('.check');
const numberp = document.querySelector('.number')
const message = document.querySelector('.message')
const scorep = document.querySelector('.score')
const higscorep = document.querySelector('.higscore')

let number = Math.trunc((Math.random()*20)+1)
let score = 20;
let higscore = 0;

const mensajePantalla = function (mensaje) {
    message.textContent = mensaje;
}


check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if(guess == number) {
        document.querySelector('.number').style.width = '20rem'
        numberp.textContent = number
        message.textContent = 'Felicidades, has ganado'
        document.querySelector('body').style.backgroundColor = '#138D75'
        document.querySelector('.guess').value = null
        
        if(score > higscore) {
            
        }
    }
    else if(guess!==number) {
        mensajePantalla(guess>number? 'El numero es menor :(' : 'El numero es mayor :(')
        document.querySelector('.score').textContent = score;
        if(guess!=0) {
            score--;
        }

    }
})

