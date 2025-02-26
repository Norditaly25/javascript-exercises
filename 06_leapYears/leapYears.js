const leapYears = function(val) {
  const divisibleBy4 = val % 4 === 0;
  const divisibleBy100 = val % 100 === 0;
  const divisibleBy400 = val % 400 === 0;

  if(divisibleBy4 && (!divisibleBy100 || divisibleBy400)) { 
    return true;
  } else {
    return false;
  } 
  
};

// Do not edit below this line
module.exports = leapYears;
