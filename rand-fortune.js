// Control flow: Magic 8 ball

// Key:
// User will input a question
// 8 Ball will return random fortune


// Set userName to empty string for user input
// Set userQuestion to empty string for user input
let userName = 'mrodrz7'
let userQuestion = 'Will I make it?'
const randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''

// if userName is truthy -> "Hello (userName)"
// else -> "Hello!"
userName ? console.log(`Hello ${userName}`) : console.log('Hello!')

// "(userName)'s question: (userQuestion)"
console.log(`${userName}\'s question: ${userQuestion}`)

// Switch statement
// based on the randomized number, a statement
// is printed to the console
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    console.log(eightBall)
    break;
  case 1:
    eightBall = 'It is decidedly so'
    console.log(eightBall)
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    console.log(eightBall)
    break;
  case 3:
    eightBall = 'Cannot predict now'
    console.log(eightBall)
    break;
  case 4:
    eightBall = 'Do not count on it'
    console.log(eightBall)
    break;
  case 5:
    eightBall = 'My sources say no'
    console.log(eightBall)
    break;
  case 6:
    eightBall = 'Outlook not so good'
    console.log(eightBall)
    break;
  case 7:
    eightBall = 'Signs point to yes'
    console.log(eightBall)
    break;  
  default: 
    console.log('Something went wrong :(')
} 

// Or you can use : if/else if/else statement
// Same logic as Switch statement
// Comment out one or the other & run program

// if (randomNumber === 0) {
//   eightBall = 'It is certain'
//   console.log(eightBall)
// } else if (randomNumber === 1) {
//   eightBall = 'It is decidedly so'
//   console.log(eightBall)
// } else if ( randomNumber === 2) {
//   eightBall = 'Reply hazy try again'
//   console.log(eightBall)
// } else if (randomNumber === 3) {
//   eightBall = 'Cannot predict now'
//   console.log(eightBall)
// } else if (randomNumber === 4) {
//   eightBall = 'Do not count on it'
//   console.log(eightBall)
// } else if (randomNumber === 5) {
//   eightBall = 'My sources say no'
//   console.log(eightBall)
// } else if (randomNumber === 6) {
//   eightBall = 'Outlook not so good'
//   console.log(eightBall)
// } else if (randomNumber === 7) {
//   eightBall = 'Signs point to yes'
//   console.log(eightBall)
// } else {
//   'Something went wrong :('
// }