export class Button {

    constructor (name){
        this.name = name
    }

    init (){
        let but = document.createElement('button')
        but.innerHTML = this.name.slice(0,this.name.indexOf(' '))       
        if (this.name.slice(0,this.name.indexOf(' ')) === 'space') but.innerHTML = " "
        but.classList.add('button')
        but.classList.add(this.name.slice(this.name.indexOf(' ')+1))
        if (this.name.slice(0,this.name.indexOf(' ')).length !== 1) but.classList.add('special')
        return but
    }
}

