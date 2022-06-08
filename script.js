const button = document.querySelector('button');
const background = document.querySelector('.background')
const container = document.querySelector('.container')

button.addEventListener('click' , function(){
    background.classList.toggle('background--open')
    container.classList.toggle('container--open')
})