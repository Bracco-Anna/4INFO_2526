let automobile = function(modello, marca, anno, colore, posti ){
    (this.modello) = modello,
    (this.marca) = marca,
    (this.anno) = anno,
    (this.colore) = colore,
    (this.posti) = posti,
    (this.accensione = function(){
        console.log(`L'auto ${this.marca} ${this.modello} è accesa`)
    }),
    (this.accelera = function(){
        console.log(`L'auto ${this.marca} ${this.modello} sta accelerando`)
    }),
    (this.freno = function(){
        console.log(`L'auto ${this.marca} ${this.modello} sta frendando`)
    })

}

let auto1 = new automobile("488 Pista", "Ferrari", 2022, "nero opaco", 2)
let auto2 = new automobile("LaFerrari", "Ferrari", 2024, "rossa", 2)
let auto3 = new automobile("F40", "Ferrari", 1980, "rossa", 2)
let auto4 = new automobile("Gemera", "Koenigsegg", 2020, "verde", 4)
let auto5 = new automobile("M2", "BMW", 2024, "fucsia", 4)

let auto = {
    auto1: new automobile("488 Pista", "Ferrari", 2022, "nero opaco", 2),
    auto2: new automobile("LaFerrari", "Ferrari", 2024, "rossa", 2),
    auto3: new automobile("F40", "Ferrari", 1980, "rossa", 2),
    auto4: new automobile("Gemera", "Koenigsegg", 2020, "verde", 4),
    auto5: new automobile("M2", "BMW", 2024, "fucsia", 4)
}

for (vettura in auto) {
    auto[vettura].accensione()
    auto[vettura].accelera()
    auto[vettura].freno()
}

//terminal e poi node ./bracco_esercizio_js_11.js