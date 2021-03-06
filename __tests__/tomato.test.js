import { Tomato } from './../src/tomato.js';

describe('Tomato', () => {
  jest.useFakeTimers();
  let tomato;

  beforeEach(function() {
    tomato = new Tomato();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should create a tomato object with a water level of 30', () => {
    expect(tomato.waterLevel).toEqual(30);
  });

  test('should decrement tomato water level by 1 every second', () =>{
    jest.advanceTimersByTime(1001);
    expect(tomato.waterLevel).toEqual(29);
  });

  test('should reset tomato water level back to 30', () =>{
    jest.advanceTimersByTime(15001);
    tomato.waterTomato();
    expect(tomato.waterLevel).toEqual(30);
  });
  
  test('should indicate the crop is alive if waterLevel > 0', () =>{
    jest.advanceTimersByTime(29999);
    expect(tomato.status).toEqual("alive");
  });

  test('should indicate the crop is withered if waterLevel = 0', () =>{
    jest.advanceTimersByTime(30001);
    expect(tomato.status).toEqual("withered");
  });

  test('should change tomato harvest status to ready after 2 minutes if status is alive', () => {
    jest.advanceTimersByTime(119000);
    tomato.waterTomato();
    jest.advanceTimersByTime(2000);
    expect(tomato.harvestStatus).toEqual("ready");
  });

  test('should change tomato harvest status from ready to not ready', () => {
    tomato.harvestStatus = "ready";
    tomato.resetHarvestStatus();
    expect(tomato.harvestStatus).toEqual("not ready");
  });
});