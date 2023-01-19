const caesar = function(password,shift) {
/*     console.log('a'.charCodeAt()); //97
    console.log('z'.charCodeAt()); //122
    console.log('A'.charCodeAt()); //65
    console.log('Z'.charCodeAt()); //90 */
    if (shift<0) shift=(26+shift);

    let passwordArray=password.split('');
    let caeserArray=[];
    const regAlphabets=/[a-zA-Z]/gi;

    for (const letter of passwordArray){
        if (letter.match(regAlphabets)){
            let charCode=letter.charCodeAt();
            let newCharCode=charCode+shift;
            if (charCode<=90 && newCharCode>90) {
                do{
                    newCharCode=(newCharCode-26)
                }while (newCharCode>90);
                }
            else if (charCode<=122 && newCharCode>122){
                do{
                    newCharCode=(newCharCode-26)
                }while (newCharCode>122);
                };
            
            caeserArray.push(String.fromCharCode(newCharCode));
        }
        else caeserArray.push(letter);
    }

    let caesarPassword=caeserArray.join('');
    console.log(`og pass: ${password}\ncaeser pass: ${caesarPassword}`);
    return caesarPassword;
};

// Do not edit below this line
module.exports = caesar;
