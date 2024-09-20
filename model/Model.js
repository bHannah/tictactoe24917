export default class Model{
    //adattagok
    #LISTA = ['','','','','','','','',''];
    #lepesSzam
    #kovetkezoForma;

    //konstruktor
    constructor(){
        this.#lepesSzam = 0;
        this.#kovetkezoForma="O";
    }
    //tagfüggvények
    listaMegjelenit(){
        return this.#LISTA;
    }

    lepes(i){
        this.#LISTA[i] = this.#kovetkezoForma
        this.ellenorzes(i)
    }

    ellenorzes(i){
        const nyertes = $(".nyertes")
        console.log(i)
        console.log(this.#lepesSzam)
        if(i===0 &&
            this.#LISTA[i]===this.#LISTA[4] && this.#LISTA[8]===this.#LISTA[4] ||
            this.#LISTA[i]===this.#LISTA[i+1] && this.#LISTA[i+2]===this.#LISTA[i+1] ||
            this.#LISTA[i]===this.#LISTA[i+3] && this.#LISTA[i+6]===this.#LISTA[i+3]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===1 &&
            this.#LISTA[i]===this.#LISTA[i+1] && this.#LISTA[i-1]===this.#LISTA[i+1] ||
            this.#LISTA[i]===this.#LISTA[i+3] && this.#LISTA[i+6]===this.#LISTA[i+3]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===2 &&
            this.#LISTA[i]===this.#LISTA[i-1] && this.#LISTA[i-2]===this.#LISTA[i-1] ||
            this.#LISTA[i]===this.#LISTA[4] && this.#LISTA[6]===this.#LISTA[4] ||
            this.#LISTA[i]===this.#LISTA[i+3] && this.#LISTA[i+6]===this.#LISTA[i+3]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===3 &&
            this.#LISTA[i]===this.#LISTA[i-3] && this.#LISTA[i+3]===this.#LISTA[i-3] ||
            this.#LISTA[i]===this.#LISTA[i+1] && this.#LISTA[i+2]===this.#LISTA[i+1]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===4 &&
            this.#LISTA[i]===this.#LISTA[i-1] && this.#LISTA[i+1]===this.#LISTA[i-1] ||
            this.#LISTA[i]===this.#LISTA[i-3] && this.#LISTA[i+3]===this.#LISTA[i-3] ||
            this.#LISTA[i]===this.#LISTA[6] && this.#LISTA[2]===this.#LISTA[6] ||
            this.#LISTA[i]===this.#LISTA[8] && this.#LISTA[0]===this.#LISTA[8]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===5 &&
            this.#LISTA[i]===this.#LISTA[i-1] && this.#LISTA[i+1]===this.#LISTA[i-1] ||
            this.#LISTA[i]===this.#LISTA[i-3] && this.#LISTA[i+3]===this.#LISTA[i-3] ||
            this.#LISTA[i]===this.#LISTA[i-1] && this.#LISTA[i-2]===this.#LISTA[i-1]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===6 &&
            this.#LISTA[i]===this.#LISTA[i+1] && this.#LISTA[i+2]===this.#LISTA[i+1] ||
            this.#LISTA[i]===this.#LISTA[4] && this.#LISTA[2]===this.#LISTA[4] ||
            this.#LISTA[i]===this.#LISTA[i-3] && this.#LISTA[i-6]===this.#LISTA[i-3]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===7 &&
            this.#LISTA[i]===this.#LISTA[i+1] && this.#LISTA[i-1]===this.#LISTA[i+1] ||
            this.#LISTA[i]===this.#LISTA[i-3] && this.#LISTA[i-6]===this.#LISTA[i-3]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else if(i===8 &&
            this.#LISTA[i]===this.#LISTA[i-1] && this.#LISTA[i-2]===this.#LISTA[i-1] ||
            this.#LISTA[i]===this.#LISTA[4] && this.#LISTA[8]===this.#LISTA[4] ||
            this.#LISTA[i]===this.#LISTA[i-3] && this.#LISTA[i-6]===this.#LISTA[i-3]
        ){
            nyertes.append(`<p>Nyertes: ${this.#LISTA[i]}</p>`)
        }else{
            this.#lepesSzam += 1
            if(this.#lepesSzam % 2 === 0){
                this.#kovetkezoForma = "O"
            }else{
                this.#kovetkezoForma = "X"
            }
        }
    }
}