import {KeyBoard} from './components/keyBoard.js'

let keyBoard = new KeyBoard ('ENG')

let activeElem

window.addEventListener("DOMContentLoaded", keyBoard.keyboardInit());

document.addEventListener('keydown', pressButReal)
document.addEventListener('keyup', upButReal)

const keyboardButtons = document.querySelector('.keyboard-buttons')

function pressButReal(e) {
    console.log (e.code)
    for (let i=0; i<keyboardButtons.childNodes.length; i++){
       let elem = keyboardButtons.childNodes[i]
       if (elem.classList.contains(e.code)){
           activeElem = elem
           activeElem.classList.add("active")
       }
    }
}

function upButReal(){
    activeElem.classList.remove('active')
}