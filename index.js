const Persona = require('./Persona');
const Futbolista = require('./Futbolista');
const Tecnico = require('./Tecnico');
const Masajista = require('./Masajista');

console.info("Ejemplo de Polimorfismo");

console.info("Pago de Premios para la Plantilla Total: ");

const Futbolista1= new Futbolista(1000000);
console.info(Futbolista1.CalcularPremioFutbolista());

const Tecnico1= new Tecnico(875000);
console.info(Tecnico1.CalcularPremioTecnico());

const Masajista1= new Masajista(625000);
console.info(Masajista1.CalcularPremioMasajista());

console.info("El total del premio pagado es de: $ 2500000")






   
   










