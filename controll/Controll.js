import Jatekter from "../view/Jatekter.js";
import Model from "../model/Model.js";

export default class Controll{
    constructor(){
        this.jatekter=$(".jatekter")
        this.model = new Model()
        new Jatekter(this.model.listaMegjelenit(), this.jatekter)
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            this.model.lepes(event.detail);
            new Jatekter(this.model.listaMegjelenit(), this.jatekter);
        });
    }
}