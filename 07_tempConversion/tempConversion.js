const convertToCelsius = function(val) {
  const cFormula = (val - 32)/1.8;
  return Math.round(cFormula * 10) / 10;

};
 
const convertToFahrenheit = function(val1) {
  const fFormula = (val1 * 1.8) + 32;
  return Math.round(fFormula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
