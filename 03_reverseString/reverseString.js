const reverseString = function(string) {
/*     if (string=='') return ('');
    else{
        let length=string.length;
        let result='';
        for (let i=length-1;i>=0;i--) result+=string[i];
        return result;
    } */

    // Another solution
    let result=string.split('').reverse().join('');
    return result;

};

// Do not edit below this line
module.exports = reverseString;
