const findTheOldest = function(people) {
    let oldest = people.reduce( (oldest, person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        };
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        };
        if (oldest.yearOfDeath - oldest.yearOfBirth < person.yearOfDeath - person.yearOfBirth) {
            return person;
        };
        return oldest;
     }, people[0]);
     return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
