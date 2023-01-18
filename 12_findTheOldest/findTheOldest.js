const findTheOldest = function(people) {
    const date = new Date();
    const currentYear=date.getFullYear();

    // Getting age
    let age=people.map((person)=>person.yearOfDeath?person.yearOfDeath-person.yearOfBirth:currentYear-person.yearOfBirth);
    

};

// Do not edit below this line
module.exports = findTheOldest;
