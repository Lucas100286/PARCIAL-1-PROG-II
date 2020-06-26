class Tecnico {
    constructor (premiototal) {

        premiototal = 2500000;
                
     }
    
     
        
        
    

 
CalcularPremioTecnico() {
    const premio = 2500000;
    const porcentajet = 35;
    var valorPremio =((premio * porcentajet) / 100);
    return("El premio para el Técnico es: $ " +valorPremio);
   };
}
module.exports = Tecnico;