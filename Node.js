const rickName = "Rick";
const rickCurrentAge = 40;
const rickMaximumAge = 80;
const rickQuantityPerWeek = 10;

const alisonName = "Alison";
const alisonCurrentAge = 50;
const alisonMaximumAge = 80;
const alisonQuantityPerWeek = 20;

const nickName = "Nick";
const nickCurrentAge = 60;
const nickMaximumAge = 80;
const nickQuantityPerWeek = 30;

const rick = {
  name: "Rick",
  currentAge: 40,
  maximumAge: 80,
  quantityPerWeek: 10,
};

const alison = {
  name: "Alison",
  currentAge: 50,
  maximumAge: 80,
  quantityPerWeek: 20,
};

const nick = {
  name: "Nick",
  currentAge: 60,
  maximumAge: 80,
  quantityPerWeek: 30,
};

const names = ["Rick", "Alison", "Nick"];

const people = [rick, alison, nick];

// This is a function which is going to log a message(string) with the current age, total potatos, and maximum age
// Arguments: We need the name, currentAge, maximumAge and quantityPerWeek
//const name = name;

function calculatePotatoes(name, currentAge, maximumAge, quantityPerWeek) {
  const numberOfWeeks = ((maximumAge - currentAge) * 365) / 7;
  const totalPotatos = numberOfWeeks * quantityPerWeek;
  const phrase = `${name} has ${currentAge} years and will eat ${totalPotatos} potatos until age of ${maximumAge}`;

  console.log("Result:", phrase);
  return phrase;
}

calculatePotatoes(
  rickName,
  rickCurrentAge,
  rickMaximumAge,
  rickQuantityPerWeek
);

calculatePotatoes(
  alisonName,
  alisonCurrentAge,
  alisonMaximumAge,
  alisonQuantityPerWeek
);

calculatePotatoes(
  nickName,
  nickCurrentAge,
  nickMaximumAge,
  nickQuantityPerWeek
);