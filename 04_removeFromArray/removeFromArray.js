const removeFromArray = function(array, ...TheArgs) {
    let index=''
    for (const arg of TheArgs){
        index=array.indexOf(arg);
        if (index==-1) continue;
        array.splice(index,1);
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
