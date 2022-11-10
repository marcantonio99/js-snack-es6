let squadreCampionato = [
    {
        name:"Roma",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"Mesagne",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"Torino",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"Arsenal",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"Napoli",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"Milan",
        puntiFatti: "",
        falliSubiti:"",
    },
]; 

let newArray = [];

for(let i = 0; i< squadreCampionato.length; i++){
    let {puntiFatti, falliSubiti}= squadreCampionato[i];
    squadreCampionato[i].falliSubiti = generatoreNumeroRandom();
    squadreCampionato[i].puntiFatti = generatoreNumeroRandom();
}
console.log(squadreCampionato);

for(let i = 0; i< squadreCampionato.length; i++){
    let {name, falliSubiti}= squadreCampionato[i];
    let obj = {...squadreCampionato.name, name, falliSubiti};
    newArray.push(obj);
}
console.log(newArray);

//funzione
function generatoreNumeroRandom(){
    let numeroCPU1 = Math.round(Math.random() * 5) + 0;
    return numeroCPU1;
    
}