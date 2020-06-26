class Masajista {
    constructor (premiototal) {

        premiototal = 2500000;
                
     }
    
     
        
        
    

 
CalcularPremioMasajista() {
    const premio = 2500000;
    const porcentajem = 25;
    var valorPremio =((premio * porcentajem) / 100);
    return("El premio para el Masajista es: $ " +valorPremio);
   };
}
module.exports = Masajista;