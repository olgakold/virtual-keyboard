import {KeyBoard} from './components/keyBoard.js'

let keyBoard = new KeyBoard ('ENG')

window.addEventListener("DOMContentLoaded", keyBoard.keyboardInit());

document.addEventListener('keydown', pressButReal)

function pressButReal(e) {
    console.log (e.code)
    for (let i=0; i<keyboardButtons.childNodes.length; i++){
       let elem = keyboardButtons.childNodes[i]
       if (elem.innerHTML === e.code){
           console.log ('yes')
       }
    }
    //console.log (keyboardButtons.childNodes[0].innerHTML)
}