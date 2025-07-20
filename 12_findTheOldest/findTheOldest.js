const findTheOldest = people =>
  people.reduce((acc, person) => {
    const yearOfBirth = person.yearOfBirth;
    const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
    const age = yearOfDeath - yearOfBirth;

    const yearOfBirthOldest = acc.yearOfBirth;
    const yearOfDeathOldest = acc.yearOfDeath || new Date().getFullYear();
    const ageOldest = yearOfDeathOldest - yearOfBirthOldest;

    return age > ageOldest ? person : acc;
  });


// Do not edit below this line
module.exports = findTheOldest;
