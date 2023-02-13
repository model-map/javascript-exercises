const findTheOldest = function(people) {
    people.forEach((person)=>{
        if (!person.yearOfDeath){
            person.yearOfDeath= (new Date()).getFullYear();
        };
    });

    let sorted= people.sort((lastPerson,nextPerson)=>{
        return lastPerson.yearOfDeath-lastPerson.yearOfBirth>
                nextPerson.yearOfDeath-nextPerson.yearOfBirth?
                -1:1;
    })
    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;