'use strict';

const check = document.querySelector('.check');
const numberp = document.querySelector('.number')
const message = document.querySelector('.message')
const scorep = document.querySelector('.score')
const higscorep = document.querySelector('.highscore')
const again = document.querySelector('.again')  

let number = Math.trunc((Math.random()*20)+1)
let score = 20;
let higscore = 0;

const mensajePantalla = function (mensaje) {
    message.textContent = mensaje;
}

again.addEventListener('click', () => {
    number = Math.trunc((Math.random()*20)+1)
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222'
    numberp.textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    message.textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = null
})



check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if(guess == number) {
        document.querySelector('.number').style.width = '20rem'
        numberp.textContent = number
        message.textContent = 'Felicidades, has ganado'
        document.querySelector('body').style.backgroundColor = '#138D75'
        document.querySelector('.guess').value = null
        if(score>higscore) {
            higscore = score;
            document.querySelector('.highscore').textContent = higscore
        }

    }
    else if(guess!==number) {

        if(score>1) {
            mensajePantalla(guess>number? 'El numero es menor :(' : 'El numero es mayor :(')
            score--
            document.querySelector('.score').textContent = score;
        }   
        else {
            message.textContent = 'Perdiste'
            document.querySelector('.score').textContent = 0;
        }




    

    }
})



