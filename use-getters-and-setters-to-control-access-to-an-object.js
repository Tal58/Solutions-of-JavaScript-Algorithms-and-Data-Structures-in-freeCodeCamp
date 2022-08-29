// Only change code below this line

class Thermostat {
  constructor(temp){
    this.temp=temp
  }
  get temperature(){
    return (5/9)*(this.temp-32)
  }
  set temperature(temps){
    this.temp = (temps*9/5)+32
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius