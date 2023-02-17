function TemperatureConverter(celsiusTemperature) {
    this.celsiusTemperature = celsiusTemperature;
    this.temperature = celsiusTemperature;
    this.measure = "Celsius";
    this.convertToKelvin = function() {
        this.temperature = celsiusTemperature + 273.15;   
        this.measure = 'Kelvin';     
    };
    
    this.convertToFahrenheit = function() {
        this.temperature = 1.8 * celsiusTemperature + 32;    
        this.measure = 'Fahrenheit';   
    };
    
    this.increaseTemperature = function(celsiusDegrees) {
        if (typeof celsiusDegrees === 'number' && Number.isInteger(celsiusDegrees) && celsiusDegrees > 0) {
            this.celsiusTemperature += celsiusDegrees; 
        }else  {
            return "Incorrect format of celsiusDegrees argument";
        }             
        
        if (this.measure === 'Kelvin') {
            this.convertToKelvin();
        }
        if (this.measure === "Fahrenheit") {
            this.convertToFahrenheit;
        }         
    };
    
    this.isBoiled = function() {
            return this.celsiusTemperature >= 100; 
    }
}

let temperatureConverter = new TemperatureConverter(90);

console.log(temperatureConverter.increaseTemperature(10));
console.log(temperatureConverter.celsiusTemperature);
console.log(temperatureConverter.isBoiled());
