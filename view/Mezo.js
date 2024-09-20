export default class Mezo{
    //adattagok
    #lepes = {}
    #index
    //konstruktor
    constructor(lepes, index, szuloElem){
        this.#lepes=lepes
        this.#index=index
        this.szuloElem = szuloElem;
        this.mezoMegjelenit()
        this.kattintottElem = $(".kartya:last-child");
        this.esemenyKezelo()
    }
    //tagfüggvények
    mezoMegjelenit(){
        this.szuloElem.append(`
            <div class="card col-sm kartya" id="box">
            <p class="card-text">${this.#lepes}</p>
            </div>`)
    }

    esemenyKezelo(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail: this.#index});
            window.dispatchEvent(e);
            console.log(e);
        })
    }
}