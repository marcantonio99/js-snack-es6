const bike = [
    {
        name: "bmx",
        weightKg: 10,
    },
    {
        name: "mountain bike",
        weightKg: 8,
    },
    {
        name : "graziella",
        weightKg: 11,
    }
];

//creazione array di oggetti
let elementoCorrente;
let limite = bike[0].weightKg;

for(let i = 0; i < bike.length; i++){
    let {name, weightKg} = bike[i];
    
    if(weightKg < limite){
        
        limite = weightKg;

        elementoCorrente = name;
    }
}
 console.log(`la bicicletta più leggera è ${elementoCorrente} e il suo peso è pari a: ${limite}kg`);