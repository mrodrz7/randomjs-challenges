// temperature in Kelvin
const kelvin = 293

// temperature in Celcius
const celcius = kelvin - 273

// equation for fahrenheit
// Math.floor() rounds number down
const fahrenheit = Math.floor(celcius * (9/5) + 32)

// equation for newton
const newton = Math.floor(celcius * (33/100))

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperate is ${newton} degrees Newtons.`)
