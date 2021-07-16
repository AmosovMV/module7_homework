function Device(power,weight,brand) {
  this.eltype = "Electrical",
  this.power = +power,
  this.weight = +weight,
  this.brand = brand
  this.turnOn = false;
}

Device.prototype.Wire = function(){
  if (this.turnOn === true){console.log(`Устройство ${this.type} марки ${this.brand} включено`)} else {console.log(`Устройство ${this.type} марки ${this.brand} выключено`)}
  }

function DeviceType(type,power,weight,brand) {          
  this.type = type,
  this.power = +power,
  this.weight = +weight,
  this.brand = brand,
  this.show = function() {console.log(`Это ${this.type} марки ${this.brand}`)};
}

DeviceType.prototype = new Device();

const device1 = new DeviceType('лампа',30, 500, 'Xiaomi');
const device2 = new DeviceType('телевизор',100, 2000, 'LG');
const device3 = new DeviceType('телевизор', 110, 1800, 'Samsung')

function getSummPower() {
  summ = 0; 
  if (device1.turnOn) {
    summ += device1.power
  } 
  if (device2.turnOn) {
    summ += device2.power
  }
  if (device3.turnOn) {
    summ += device3.power
  }
  return summ
}

device1.turnOn = true;
device1.show();
device2.show();
device3.show();
device3.turnOn = true;
device1.Wire();
device2.Wire();
device3.Wire();
console.log('Суммарное потребление - ' + getSummPower() + 'Вт');

///////////////////////////// Другое решение //////
function Device(power,weight) {
  this.species = "Electrical",
  this.power = +power,
  this.weight = +weight,
  this.turnOn = false;
}

 Device.prototype.Show = function(){
     console.log(`Это ${this.type} марки ${this.brand}`)
   }

  Device.prototype.Wire = function(){
    if (this.turnOn){console.log(`Устройство ${this.type} марки ${this.brand} включено`)} else {console.log(`Устройство ${this.type} марки ${this.brand} выключено`)}
    }

function Lamp(type,power,weight,brand,lumen) {
  this.type = type,
  this.brand = brand,
  this.power = +power,
  this.weight = +weight,
  this.lumen = lumen;
}

function Tv(type,power,weight,brand,diag) {
  this.type = type,
  this.brand = brand,
  this.power = +power,
  this.weight = +weight,
  this.diag = diag;
}

function Note(type,power,weight,brand,diag,cpu) {
  this.type = type,
  this.brand = brand,
  this.power = +power,
  this.weight = +weight,
  this.diag = diag,
  this.cpu = cpu;
}

Lamp.prototype = new Device();
Tv.prototype = new Device();
Note.prototype = new Device();

let device1 = new Lamp('лампа',30, 500, 'Xiaomi');
let device2 = new Tv('телевизор',100, 2000, 'LG',50);
let device3 = new Note('ноутбук', 70, 1500, 'Samsung','Intel');

function getSummPower() {
  summ = 0; 
  if (device1.turnOn) {
    summ += device1.power
  } 
  if (device2.turnOn) {
    summ += device2.power
  }
  if (device3.turnOn) {
    summ += device3.power
  }
  return summ
}
device1.turnOn = true;
device1.Show();
device2.Show();
device3.Show();
device3.turnOn = true;
device1.Wire();
device2.Wire();
device3.Wire();
console.log('Суммарное потребление - ' + getSummPower() + ' Вт');