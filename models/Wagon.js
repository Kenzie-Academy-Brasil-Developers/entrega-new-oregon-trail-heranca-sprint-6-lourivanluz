class Wagon {
    constructor (num){
        this.capacity = num
        this.passengers = []
    }

    getAvailableSeatCount = () =>{
        return this.capacity - this.passengers.length
    }

    join = (passageiro) =>{
        if (this.getAvailableSeatCount() > 0){

            this.passengers.push(passageiro)
        }else {
            return 'carroça cheia'
        }
    }

    shouldQuarantine = () =>{
        let result = false
        this.passengers.forEach(item =>{
            if(item.isHealthy!=='true'){
                result = true
            }
        })
        return result
    }

    totalFood = () =>{
        if(this.passengers.length>0){
            return this.passengers.reduce((acc,item)=> Number(item.food)+acc,0)
        }else{
            return 'carroça vazia'
        }
        
    }
}

module.exports = Wagon;