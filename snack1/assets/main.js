const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];
let max;
let min;
let numeroCPU1 = generatoreNumeroRandom();
let numeroCPU2 = generatoreNumeroRandom();
 console.log(numeroCPU1)
 console.log(numeroCPU2)
if(numeroCPU1 > numeroCPU2){
     max = numeroCPU1;
     min = numeroCPU2;
     console.log(max)
     console.log(min)
    
}else if(numeroCPU1 < numeroCPU2){
     min = numeroCPU1;
     max = numeroCPU2;
     console.log(max)
     console.log(min)
}else{
    console.log("i numeri sono uguali, ricarica la pagina")
}
//metodo con forEach
myArray.forEach((Element, index) => {
    if( index >= min && index <= max){
        newArray.push(Element);
    }
})
console.log(newArray)
let newArray2 = myArray.filter((Element, index)=>{
    if (index >= min && index <= max){
        return true;
    }
})
console.log(newArray2)

//funzioni
function generatoreNumeroRandom(){
    let numeroCPU1 = Math.round(Math.random() * 5) + 0;
    return numeroCPU1;
    let numeroCPU2 = Math.round(Math.random() * 5) + 0;
    return numeroCPU2;
}