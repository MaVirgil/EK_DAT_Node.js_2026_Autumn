const numbers = [1, 2, 3, 4, 5, 6];

//double numbers
const numbersDoubled = numbers.map((number) => number * 2);

console.log(`Doubled numbers: ${numbersDoubled}`);

const countries = [
  {
    name: "Lesotho",
    gdp: 530
  },
  {
    name: "Papua New Guinea",
    gdp: 1025
  },
  {
    name: "Saint Vincent and the Grenadines",
    gdp: 1200
  }
];

//task: if the country is lesotho, boost the GDP with 500

countriesUpdatedGdp = countries.map((country) => ({
  ...country,
  gdp: country.name === 'Lesotho' ? country.gdp + 500 : country.gdp
}));

console.log(countriesUpdatedGdp)

// task filter out countries where the gdp is below 1000
const countriesFilteredGdp = countries.filter((country) => country.gdp >= 1000);

console.log(countriesFilteredGdp);