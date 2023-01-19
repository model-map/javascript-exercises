const caesar = function(password,shift) {
/*     console.log('a'.charCodeAt()); //97
    console.log('z'.charCodeAt()); //122
    console.log('A'.charCodeAt()); //65
    console.log('Z'.charCodeAt()); //90 */

    while (shift<0) shift=(26+shift);
    let caeserArray=password.split('').map(letter =>letterShift(letter,shift));
    let caesarPassword=caeserArray.join('');
    return caesarPassword;
};

function letterShift(letter,shift){
    if (letter.match(/[a-z]/gi)){
        let charCode=letter.charCodeAt();
        let newCharCode=charCode+shift;
        while ((charCode<=90 && newCharCode>90) || (charCode<=122 && newCharCode>122)) newCharCode-=26;
        return(String.fromCharCode(newCharCode));
    }
    else return(letter);
}

// Do not edit below this line
module.exports = caesar;
