// Calculate your weight on another planet

// Key/Params:
// earthWeight = your weight on earth as a Number
// planet = planet as a String

// user either if/else or switch statement

const calculateWeight = (earthWeight, planet) => {

    // if/else if/else statement
    
    //   if (planet === 'Mercury') {
    //     return earthWeight * 0.378
    //   } else if (planet === 'Venus') {
    //     return earthWeight * 0.907
    //   } else if (planet === 'Mars') {
    //     return earthWeight * 0.377
    //   } else if (planet === 'Jupiter') {
    //     return earthWeight * 2.36
    //   } else if (planet === 'Saturn') {
    //     return earthWeight * 0.916
    //   } else {
    //     return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    //   }
    
    // switch statement
      switch (planet) {
        case 'Mercury':
          return earthWeight * 0.378
          break;
        case 'Venus':
          return earthWeight * 0.907
          break;
        case 'Mars':
          return earthWeight * 0.377
          break;
        case 'Jupiter':
          return earthWeight * 2.36
          break;
        case 'Saturn':
          return earthWeight * 0.916
          break;
        default:
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
      }
    }
    
    calculateWeight(213, 'Mars')
    // console.log(calculateWeight(212, 'Jupiter'))