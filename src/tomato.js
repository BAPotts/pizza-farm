export class Tomato {
  constructor(){
    this.waterLevel = 30;
  }

  setWaterLevel() {
    setInterval(() => {
      this.waterLevel--;
    }, 1000);
  }

  waterTomato() {
    this.waterLevel = 30;
  }
}