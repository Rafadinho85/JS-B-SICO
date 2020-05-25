

var elemento;
var elemento2;

function miJuego(elemento, elemento2){
    if((elemento == "piedra" && elemento2 == "papel") ||(elemento =="papel" && elemento2 == "piedra") ){
        console.log("gano papel");
        
    }else if((elemento == "piedra" && elemento2 == "tijera") || (elemento == "tijera" && elemento2 == "piedra") ){
    
        console.log("gano piedra");
        
    }
    else{
        console.log("gano tijera");
        
    }
}

miJuego("piedra","papel")

