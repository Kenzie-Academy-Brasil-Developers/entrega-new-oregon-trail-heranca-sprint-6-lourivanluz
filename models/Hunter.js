const Traveler  = require("./Traveler");

class Hunter extends Traveler{
    constructor(name,saudavel=true,comida=2){
        super(name,saudavel,comida)
        
    }

    //@Override
    hunt = () =>{
        this.food += 2
        return '+4 de food'
    }

    //@Override
    eat = () =>{
        if( this.food <=0){
            this.isHealthy = false
            return 'vc esta doente'
        }
        if(this.food === 1){
            this.isHealthy = false
            this.food -=1
            return 'vc esta doente'
        }
        this.food -= 2
        return 'vc comeu'
    }

    giveFood = (traveler,numOfFoodUnits) =>{
        if(numOfFoodUnits <= this.food){
            console.log(numOfFoodUnits)
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
        console.log(traveler)
    }
}

module.exports = Hunter