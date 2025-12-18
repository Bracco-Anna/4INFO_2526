let Animale = function(specie, famiglia, colore){
    (this.specie = specie)
    (this.famiglia = famiglia)
    (this.colore = colore)
    (this.stampaSpecie = function(){
        console.log("L'animale è (this.specie)")
    }),
    (this.stampaFamiglia = function(){
        console.log("L'animale appartiene alla famiglia (this.famiglia)")
    }),
    (this.stampaColore = function(){
        console.log("L'animale è di colore (this.colore")
    }),
        
    
}

let auto = function(modello, marca, anno, colore, posti ){
    (this.modello) = modello,
    (this.marca) = marca,
    (this.anno) = anno,
    (this.colore) = colore,
    (this.modello = function(){
        console.log(`L'auto è ${this.modello}`)
    }),
    (this.anno = function(){
        console.log(`L'auto è dell anno ${this.anno}`)
    }),
    (this.colore = function(){
        console.log(`L'auto è di colore ${this.colore}`)
    })

}

let poligono = function(lati, area, perimetro){
    (this.lati) = lati,
    (this.area) = area,
    (this.perimetro) = perimetro,
    (this.stampaLati = function(){
        console.log("il poligono ha (this.lati) lati")
    }),
    (this.stampaArea = function(){
        console.log("l'area del poligono vale (this.area")

    }),
    (this.stampaPerimetro = function(){
        console.log("il perimetro del poligono vale (this.poligono)")
    }

    ),

}

