// The forecast for today is 293 kelvin. //
const kelvin = 0;
// This is the kelvin temperature converted to celcius. //
const celsius = kelvin - 273;
// This is fahrenheit converted from celsius. //
let fahrenheit = celsius * (9/5) + 32;
// This rounds down the decimal from the conversion. //
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);