import {KeyBoard} from './components/keyBoard.js'

if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'ENG')

let lang = localStorage.getItem('lang')

let keyBoard = new KeyBoard (lang)

let activeElem = new Set()

window.addEventListener("DOMContentLoaded", keyBoard.keyboardInit());

const keyboardButtons = document.querySelector('.keyboard-buttons'),
      textarea = document.querySelector('textarea'),
      buttons  = document.querySelectorAll('button')

let text = textarea.innerHTML      

document.addEventListener('keydown', pressButReal)
document.addEventListener('keyup', upButReal)
for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('mousedown', pressBut)
    buttons[i].addEventListener('mouseup', upBut)
}

function pressButReal(e) {
    for (let i=0; i<keyboardButtons.childNodes.length; i++){
       let elem = keyboardButtons.childNodes[i]
       if (elem.classList.contains(e.code)){
           activeElem.add(e.code)
           elem.classList.add("active")
           if (!elem.classList.contains('special') || elem.classList.contains('Space')) text += elem.innerHTML
           textarea.innerHTML = text
       }
    }
    if (activeElem.size === 2 & (activeElem.has('ControlLeft') & activeElem.has('AltLeft'))){
        changeLang()
        
    }     
}

function upButReal(e){
    let elem = document.getElementsByClassName(e.code)[0]
    elem.classList.remove('active')
    activeElem.delete(e.code)
}

function pressBut (e){
    activeElem.add(e.target.classList[1])
    let elem = e.target
    elem.classList.add("active")
    if (!elem.classList.contains('special') || elem.classList.contains('Space')) text += elem.innerHTML
    textarea.innerHTML = text
}

function upBut(e){
    let elem = document.getElementsByClassName(e.target.classList[1])[0]
    elem.classList.remove('active')
    activeElem.delete(e.target.classList[1]) 
}

function changeLang(){  
    localStorage.getItem('lang') === 'ENG' ? lang = 'RUS' : lang = 'ENG' 
    localStorage.setItem('lang', lang) 
    keyBoard.changeLang(lang)

}

