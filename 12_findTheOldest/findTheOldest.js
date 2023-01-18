const findTheOldest = function(people) {
    const date = new Date();
    const currentYear=date.getFullYear();

    // Getting age
    let age=people.map((person)=>
            (person.yearOfDeath)?
            (person.yearOfDeath-person.yearOfBirth):
            (currentYear-person.yearOfBirth));

    let maxAge=age.reduce((currentMax,currentValue)=>{
        return ((currentMax>currentValue)?currentMax:currentValue);
    });

    let index=age.indexOf(maxAge);
    return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;
