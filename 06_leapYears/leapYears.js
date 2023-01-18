const leapYears = function(year) {
    let result=(year%100==0)?((year%400==0)?true:false):((year%4==0)?true:false);
    return result;
};

// Do not edit below this line
module.exports = leapYears;
