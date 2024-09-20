export default class Model{
    //adattagok
    #LISTA = ['','','','','','','','',''];
    #lepesSzam
    #kovetkezoForma;

    //konstruktor
    constructor(){
        this.#lepesSzam = 0;
        this.#kovetkezoLepes();
    }
    //tagfüggvények
    listaMegjelenit(){
        return this.#LISTA;
    }

    #kovetkezoLepes(){
        if(this.#lepesSzam % 2 === 0){
            this.#kovetkezoForma = "O"
        }else{
            this.#kovetkezoForma = "X"
        }
    }

    lepes(i){
        this.#LISTA[i] = this.#kovetkezoForma
        this.#lepesSzam += 1
        this.#kovetkezoLepes();
    }
}