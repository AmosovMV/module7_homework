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
