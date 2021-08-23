const Traveler  = require("./Traveler");

class Doctor extends Traveler{
    constructor(name,saudavel=true,comida=1){
        super(name,saudavel,comida)
        
    }

    heal(trevel){
        trevel.isHealthy = true
        console.log(this)
    }
}

module.exports = Doctor