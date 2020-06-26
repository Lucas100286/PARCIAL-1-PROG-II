class Futbolista {
    constructor (premiototal) {

        premiototal = 2500000;
                
     }
    
     
        
        
    

 
CalcularPremioFutbolista() {
    const premio = 2500000;
    const porcentajef = 40;
    var valorPremio =((premio * porcentajef) / 100);
    return("El premio para el futbolista es: $ " +valorPremio);
   };
}
module.exports = Futbolista;