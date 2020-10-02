// Converting your age into Dog Years!

// Key:
// First two years of a dog's life count as 10.5 dog years
// Each year after that equates to 4 dog years

// my age
let myAge = 26

// first two years of dog life
let earlyYears = 2

// takes initial value of earlyYears * 10.5
// assigns new value to earlyYears
earlyYears *= 10.5

// honestly not entirely sure what these variable naming conventions really mean
let laterYears = myAge - 2
laterYears *= 4

// earlyYears + laterYears variables to equate dog years
const myAgeInDogYears = earlyYears + laterYears

// all lowercase because why not?
const myName = 'Martin'.toLowerCase()


// prints 'My name is Martin. I am 26 years old in human years which is 117 years old in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
