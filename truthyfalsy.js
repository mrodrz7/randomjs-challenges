// Create function that returns 'true' if value is truthy
// or 'false' if value is falsy


const truthyOrFalsy = value => {
    if (value) {
      return true
    } else if (!value) {
      return false
    } else {
      return 'Something went wrong.'
    }
  }
  
  
  
  
  
  
// will return and print to console 'true'
// console.log(truthyOrFalsy(3))
  