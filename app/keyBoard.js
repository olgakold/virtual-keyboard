window.addEventListener("DOMContentLoaded", keyboardInit);

const body = document.getElementsByTagName('body')[0],
      keyboardWrapper = document.createElement('div'),
      textArea = document.createElement('textarea'),
      keyboardButtons = document.createElement('div')

let lang = 'ENG'

const keyENG = [
        "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
        'Tab',"q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[", "]","\\","Del",
        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "Enter",
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/","&#9650;","Shift",
        "Ctrl", "Win", "Alt", "space", "Alt", "&#9668;","&#9660;", "&#9658;", "Ctrl"
];

const keyRUS = [
    "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
    'Tab',"й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х", "ъ","\\","Del",
    "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д","ж","э", "Enter",
    "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","&#9650;","Shift",
    "Ctrl", "Win", "Alt", "space", "Alt", "&#9668;","&#9660;", "&#9658;", "Ctrl"
];

keyboardWrapper.className = 'keyboard-wrapper';
keyboardWrapper.append(textArea);
keyboardWrapper.append(keyboardButtons)
textArea.className = 'keyboard-input';
keyboardButtons.className = 'keyboard-buttons'

function createButtons (arr){
    for (let i=0; i<arr.length; i++){
       let but = document.createElement('button')
       but.innerHTML = arr[i]       
       if (arr[i] === 'space') but.innerHTML = ''
       keyboardButtons.append(but)
       but.classList.add('button')
       but.classList.add(arr[i].toLowerCase())
       if (arr[i].length !== 1) but.classList.add('special')
    }

}

function keyboardInit(){
   body.append(keyboardWrapper)
   lang === 'RUS' ? createButtons(keyRUS) : createButtons(keyENG)
}

document.addEventListener('keydown', pressButReal)

function pressButReal(e) {
    //console.log (e.code)
    for (let i=0; i<keyboardButtons.childNodes.length; i++){
        let elem = keyboardButtons.childNodes[i]
        console.log (elem.innerHTML)
        console.log (e.code)
       if (elem.innerHTML === e.code){
           console.log ('yes')
       }
    }
    //console.log (keyboardButtons.childNodes[0].innerHTML)
}