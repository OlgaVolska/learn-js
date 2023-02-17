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
}



let temperatureConverter = new TemperatureConverter(25);
console.log(temperatureConverter.celsiusTemperature);

temperatureConverter.convertToKelvin();
console.log(temperatureConverter.temperature);
console.log(temperatureConverter.measure);

temperatureConverter.convertToFahrenheit();
console.log(temperatureConverter.temperature);
