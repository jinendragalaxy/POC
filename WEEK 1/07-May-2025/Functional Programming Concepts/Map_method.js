const celsiusTemps = [0, 20, 30, 40];

// Use map to convert each temperature to Fahrenheit
const fahrenheitTemps = celsiusTemps.map(temp => {
  return (temp * 9/5) + 32;
});

console.log(fahrenheitTemps); 
