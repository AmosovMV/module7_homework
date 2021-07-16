class Device{
   constructor(power,weight,brand,type) {
       this.power = power,
       this.weight = weight,
       this.species = 'Electrical',
       this.turnOn = false,    
       this.brand = brand,
       this.type = type;  
   }
   getInfo(){
    return this.type +" "+ this.brand
   }
 }

class Tv extends Device{
  constructor(power,weight,brand,type,diag,resol){
    super(power,weight,brand,type),
    this.diag = diag,
    this.resol = resol;  
  }
  getInfoTV(){
    let state = "выключен"
    if(this.turnOn) state = 'включен' 
    return super.getInfo() + " диагональю " + this.diag + " дюймов " + "c разрешением " + this.resol + " " + state
  }
}

class Note extends Device{
  constructor(power,weight,brand,type,diag,cpu){
    super(power,weight,brand,type),
    this.diag = diag,
    this.cpu = cpu;  
  }
  getInfoNote(){
    let state = "выключен"
    if(this.turnOn) state = 'включен'   
    return super.getInfo() + " диагональю " + this.diag + " дюймов " + "на базе процессора " + this.cpu + " " + state
  }

}
const dev1 = new Tv(100,2000,'Samsung','телевизор',50,'FullHD');
const dev2 = new Note(50,1500,'Lenovo','ноутбук',15,'Intel');
dev2.turnOn = true;
console.log(dev1.getInfoTV())
console.log(dev2.getInfoNote())
  
const getSummPower = function(){
    let summ=0;
    if(dev1.turnOn){
      summ += dev1.power
    }
    if(dev2.turnOn){
      summ += dev2.power
    }
    return 'Общее потребление ' + summ + ' Вт'
  }

console.log(getSummPower());