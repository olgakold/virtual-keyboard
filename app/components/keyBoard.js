import {Button} from './button.js'

export class KeyBoard {

    constructor(lang){
        this.lang = lang
        this.keyboardButtons
    }

    keyENG = [
            "` Backquote","1 Digit1", "2 Digit2", "3 Digit3", "4 Digit4", "5 Digit5", "6 Digit6", "7 Digit7", "8 Digit8", "9 Digit9", "0 Digit0","- Minus","= Equal", "Backspace Backspace",
            'Tab Tab',"q KeyQ", "w KeyW", "e KeyE", "r KeyR", "t KeyT", "y KeyY", "u KeyU", "i KeyI", "o KeyO", "p KeyP","[ BracketLeft", "] BracketRight","\\ Backslash","Del Delete",
            "CapsLock CapsLock", "a KeyA", "s KeyS", "d KeyD", "f KeyF", "g KeyG", "h KeyH", "j KeyJ", "k KeyK", "l KeyL","; Semicolon","' Quote", "Enter Enter",
            "Shift ShiftLeft", "z KeyZ", "x KeyX", "c KeyC", "v KeyV", "b KeyB", "n KeyN", "m KeyM", ", Comma", ". Period", "/ Slash","&#9650; ArrowUp","Shift ShiftRight",
            "Ctrl ControlLeft", "Win MetaLeft", "Alt AltLeft", "space Space", "Alt AltRight", "&#9668; ArrowLeft","&#9660; ArrowDown", "&#9658; ArrowRight", "Ctrl ControlRight"
    ];

    keyRUS = [            
            "ё Backquote","1 Digit1", "2 Digit2", "3 Digit3", "4 Digit4", "5 Digit5", "6 Digit6", "7 Digit7", "8 Digit8", "9 Digit9", "0 Digit0","- Minus","= Equal", "Backspace Backspace",
            'Tab Tab',"й KeyQ", "ц KeyW", "у KeyE", "к KeyR", "е KeyT", "н KeyY", "г KeyU", "ш KeyI", "щ KeyO", "з KeyP","х BracketLeft", "ъ BracketRight","\\ Backslash","Del Delete",
            "CapsLock CapsLock", "ф KeyA", "ы KeyS", "в KeyD", "а KeyF", "п KeyG", "р KeyH", "о KeyJ", "л KeyK", "д KeyL","ж Semicolon","э Quote", "Enter Enter",
            "Shift ShiftLeft", "я KeyZ", "ч KeyX", "с KeyC", "м KeyV", "и KeyB", "т KeyN", "ь KeyM", "б Comma", "ю Period", ". Slash","&#9650; ArrowUp","Shift ShiftRight",
            "Ctrl ControlLeft", "Win MetaLeft", "Alt AltLeft", "space Space", "Alt AltRight", "&#9668; ArrowLeft","&#9660; ArrowDown", "&#9658; ArrowRight", "Ctrl ControlRight"
    ]

    keyboardInit(){
        const body = document.getElementsByTagName('body')[0],
        keyboardWrapper = document.createElement('div'),
        textArea = document.createElement('textarea'),
        keyboardButtons = document.createElement('div'),        
        comment = document.createElement('div')
        this.keyboardButtons = keyboardButtons
        keyboardWrapper.className = 'keyboard-wrapper';
        keyboardWrapper.append(textArea);
        keyboardWrapper.append(keyboardButtons)
        keyboardWrapper.append(comment)
        textArea.className = 'keyboard-input';
        keyboardButtons.className = 'keyboard-buttons'
        comment.className = 'comment'
        comment.innerHTML = "Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + alt"
        body.append(keyboardWrapper)
        this.lang === 'RUS' ? this.createButtons(this.keyRUS) : this.createButtons(this.keyENG)
    }

    createButtons (arr){
        for (let i=0; i<arr.length; i++){
            let but = new Button (arr[i])
            this.keyboardButtons.append(but.init())
        }
    }

    changeLang(lang){
        let arr = lang === 'RUS' ? this.keyRUS : this.keyENG
        for (let i=0; i<this.keyboardButtons.childNodes.length; i++){
            this.keyboardButtons.childNodes[i].innerHTML = arr[i].slice(0,arr[i].indexOf(' '))
            if (arr[i].slice(0,arr[i].indexOf(' ')) === 'space') this.keyboardButtons.childNodes[i].innerHTML = " "
        }
    }


    
}