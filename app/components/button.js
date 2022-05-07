export class Button {

    constructor (name){
        this.name = name
    }

    init (){
        let but = document.createElement('button')
        but.innerHTML = this.name       
        if (this.name === 'space') but.innerHTML = ''
        but.classList.add('button')
        but.classList.add(this.name.toLowerCase())
        if (this.name.length !== 1) but.classList.add('special')
        return but
    }
}

