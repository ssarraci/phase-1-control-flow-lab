function scuberGreetingForFeet(someValue){
  // this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result;
  if (someValue <= 400) {
      result = 'This one is on me!'; 
    }
    else if (someValue > 2000 && someValue < 2500) {
      result = 'I will gladly take your thirty bucks.';
    }
    
    else if (someValue > 2500) {
      result = 'No can do.';
    }
    return result;
}
 
function ternaryCheckCity(someCity){
  //city, 2 different things
  return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // tip, 3 things. else 
  let resultTip;
  switch (tip) {
    case 'generous':
      resultTip = 'Thank you so much.';
      break;
    case 'not as generous':
      resultTip = 'Thank you.';
      break;
    default:
      resultTip = 'Bye.'
  }
  return resultTip;
}