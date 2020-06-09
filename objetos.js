// sintaxis de un objeto

var objeto = {};

//ejemplo

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
        
    }

};

miAuto.marca
