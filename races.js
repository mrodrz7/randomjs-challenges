// Race day for kids and adults! 
// Check to see what time you race and if you qualify to race as an adult!

// Key:
// Adults over the age of 18 race at different times
// Kids under age of 18 race at their own designated time
// Also check for early registration amongst adults

// Will populate a whole number from 0 - 999
let raceNumber = Math.floor(Math.random() * 1000);

// Registered early? Can be changed
let regEarly = true
let runnerAge = 18

// If age > 18 and registered early add 1000 to the race number
if (runnerAge > 18 && regEarly) {
  raceNumber += 1000
} 

// Checks if runner is either under 18, 18, or over 18
// If adult will also check for early registration
if (runnerAge > 18 && regEarly) {
  console.log(`Racer ID: ${raceNumber} will race at 9:30 AM!`)
} else if (runnerAge > 18 && !regEarly) {
  console.log(`Late adults run at 11:00 AM.`)
} else if (runnerAge < 18 && runnerAge >= 0) {
  console.log(`Racer ID: ${raceNumber} will run at 12:30 PM!`)
} else {
  console.log(`Racer ID: ${raceNumber} please come to the front desk to verify age.`)
}

