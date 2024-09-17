import Mezo from "./Mezo.js";

export default class Jatekter{
    //adattagok
    #lista = []
    #szuloElem
    //konstruktor
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.kiir()
    }
    //tagfüggvények
    kiir() {
        this.#lista.forEach((elem, index) => {
            new Mezo(elem, index, this.#szuloElem);
        })
    }
}