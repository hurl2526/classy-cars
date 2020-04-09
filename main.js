class Vehicle {
  constructor(name,wheelCount,maxSpeed){
    this.name = name
    this.wheelCount = wheelCount
    this.maxSpeed = maxSpeed
    this.speed = 0
  }
    accelerate (){
      if(this.speed < this.maxSpeed)
      this.speed = this.speed + (1/3 * this.maxSpeed)
    }
}

class Car extends Vehicle{
  constructor(name,value){
    super()
    this.name = name
    this.wheelCount = 4
    this.maxSpeed = value
  }
  drive(){
    return "Vroom. "
  }
}

class Ferrari extends Car {
  constructor(){
    super()
    this.name = 'Ferrari'
    this.maxSpeed = 180
  }
  drive(){
    return super.drive() + 'I\'m a Ferrari!'
  }
  accelerate(){
    if(this.speed < this.maxSpeed)
      this.speed = this.speed + (1/2 * this.maxSpeed)
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}
