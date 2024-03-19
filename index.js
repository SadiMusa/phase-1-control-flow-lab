function scuberGreetingForFeet(){
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}
// Import necessary helper functions if any
const helpers = require('./helpers');

// Define scuberGreetingForFeet function
function scuberGreetingForFeet(feet) {
  let message;
  if (feet <= 400) {
    message = 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    message = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else {
    message = 'No can do.';
  }
  return message;
}

// Define ternaryCheckCity function
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Define switchOnCharmFromTip function
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Export the functions
module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};
