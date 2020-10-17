// Create a switch statement that returns a specific emoticon for a specific string input
// Example : 'angry' => '>:('
const toEmoticon = (str) => {
    switch (str) {
      case 'angry':
        return '>:('
        break;
      case 'shrug':
        return '|_{"}_|'
        break;
      case 'smiley face':
        return ':)'
        break;
      case 'frowny face':
        return ':('
        break;
      case 'winky face':
        return ';)'
        break;
      case 'heart': 
        return '<3'
        break;
      default:
        return '|_(* ~ *)_|'
        break;
    }
  }
  
  
  // Should print '|_(* ~ *)_|'
  console.log(toEmoticon("whatever")) 
  