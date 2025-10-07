const addNumbers = (num1, num2) => {
  return `The sum of ${num1} and ${num2} is equal to: ` + (num1 + num2);
};

const nextNumber = (num) => {
  return `The next number after ${num} is: ` + (num + 1);
};

const calculateArea = (base, height) => {
  return (
    `The calculated area of base = ${base} and height = ${height} is: ` +
    (base * height) / 2
  );
};

const convertYearsToDays = (ageInYears) => {
  return `${ageInYears} years is equal to ` + ageInYears * 365 + ` days`;
};

const convertDaysToHours = (timeInDays) => {
  return `${timeInDays} days is equal to ` + timeInDays * 24 + ` hours`;
};

const convertHoursToMinutes = (timeInHours) => {
  return `${timeinHours} hours is equal to ` + timeInHours * 60 + ' minutes';
}

const convertMinutesToSeconds = (timeInMinutes) => {
  return (
    `${timeInMinutes} minutes is equal to ` + timeInMinutes * 60 + ` seconds`
  );
};

const convertHoursToSeconds = (timeInHours) => {
  return `${timeInHours} hours is equal to ` + timeInHours * 3600 + ` seconds`;
};

const sumLessThan100 = (num1, num2) => {
  if (num1 + num2 < 100) {
    return true;
  } else return false;
};

const greeting = (name) => {
  console.log(`Hello, ${name}, welcome to this Javascript exercise tutorial!`);
};

const calculateImposter = (imposterCount, playerCount) => {
  console.log(
    "Chances of being an imposter are at: " +
      100 * (imposterCount / playerCount) +
      "%"
  );
};

const checkNumber = (number) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (array.includes(number)) {
    return true;
  } else return false;
};

console.log(addNumbers(3, 5));
console.log(nextNumber(5));
console.log(calculateArea(5, 10));
console.log(convertYearsToDays(36));
console.log(convertDaysToHours(5));
console.log(convertMinutesToSeconds(360));
console.log(convertHoursToSeconds(78));
console.log(sumLessThan100(50, 49));
console.log(greeting("Andrei"));
console.log(calculateImposter(2, 10));
console.log(checkNumber(3));
