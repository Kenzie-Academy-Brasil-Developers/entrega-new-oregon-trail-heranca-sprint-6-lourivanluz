class Traveler {
    constructor (name,saudavel=true,comida=1){
        this.name = name
        this.isHealthy = saudavel
        this._food = comida
    }

    get food(){
        return this._food
    }

    set food(num){
        this._food = num
    }

    hunt = () =>{
        this.food += 2
        return '+2 de food'
    }

    eat = () =>{
        if( this.food <= 0){
            this.isHealthy = false
            return 'vc esta doente'
        }else{
            this.food -= 1
            return 'vc comeu'
        }
    }
}

module.exports = Traveler
