export class KeyBoard {

    constructor(lang){
        this.lang = lang
    }

    keyENG = [
            "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
            'Tab',"q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[", "]","\\","Del",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "Enter",
            "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/","&#9650;","Shift",
            "Ctrl", "Win", "Alt", "space", "Alt", "&#9668;","&#9660;", "&#9658;", "Ctrl"
    ];

    keyRUS = [
        "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
        'Tab',"й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х", "ъ","\\","Del",
        "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д","ж","э", "Enter",
        "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","&#9650;","Shift",
        "Ctrl", "Win", "Alt", "space", "Alt", "&#9668;","&#9660;", "&#9658;", "Ctrl"
    ]

    keyboardInit(){
        const body = document.getElementsByTagName('body')[0],
        keyboardWrapper = document.createElement('div'),
        textArea = document.createElement('textarea'),
        keyboardButtons = document.createElement('div')
        keyboardWrapper.className = 'keyboard-wrapper';
        keyboardWrapper.append(textArea);
        keyboardWrapper.append(keyboardButtons)
        textArea.className = 'keyboard-input';
        keyboardButtons.className = 'keyboard-buttons'
        body.append(keyboardWrapper)
        this.lang === 'RUS' ? createButtons(this.keyRUS) : createButtons(this.keyENG)
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
    }
}