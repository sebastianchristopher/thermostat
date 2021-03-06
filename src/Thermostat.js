class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  getCurrentTemperature(){
    return this.temperature;
  }
  setCurrentTemperature(degrees){
    this.temperature = degrees;
  }
  up() {
    if(this.isMaxTemp()){
      throw 'Thermostat is at its maximum temperature.';
    } else {
      this.temperature ++;
    }
  }
  down() {
    if(this.temperature > 10) {
      this.temperature--;
    } else {
      throw 'Thermostat is at its minimum temperature.';
    }
  }
  isMaxTemp() {
    return (this.temperature === 25 && this.powerSavingMode === true) || (this.temperature === 32);
  }
  turnPowerSavingOff() {
    this.powerSavingMode = false;
  }
  turnPowerSavingOn() {
    this.powerSavingMode = true;
    if(this.temperature > 25) {
      this.temperature = 25;
    }
  }
  switchPowerSavingMode() {
    if(this.powerSavingMode === false) {
      this.turnPowerSavingOn();
    } else {
      this.turnPowerSavingOff();
    }
  }
  reset() {
    this.temperature = 20;
  }
  energyUsage() {
    if(this.temperature < 18) {
      return 'low';
    } else if(this.temperature < 25) {
      return 'medium';
    } else {
      return 'high';
    }
  }
}
