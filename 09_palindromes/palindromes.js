const palindromes = function (string) {
/*     string=string.toLowerCase();
    let string_onlyAlphabets='';
    let alpha=/[a-z]/i;
    let splitString=string.split('');
    for (const letter of splitString){
        if (letter.match(alpha)) string_onlyAlphabets+=letter;
    }
    let reverse_string_onlyAlphabets=string_onlyAlphabets.split('').reverse().join('');
    if (string_onlyAlphabets==reverse_string_onlyAlphabets) return true;
    return false; */

    // ANOTHER SOLUTION:
    string=string.toLowerCase().replace(/[^a-z]/gi,'');
    reverse_string=string.split('').reverse().join('');
    if (string==reverse_string) return true;
    return false;

   
};

// Do not edit below this line
module.exports = palindromes;
