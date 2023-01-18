const fibonacci = function(search) {
    /* if (search<0) return 'OOPS';
    let newFibonacci=[0,1];
    let length=newFibonacci.length;
    for (let i=1;i<=search-1;i++){
        let newElement=newFibonacci[length-1]+newFibonacci[length-2];
        newFibonacci.push(newElement);
        length=newFibonacci.length;
    }
    return newFibonacci[search]; */

    // ANOTHER CODE
    let arrayFibonacci=[0,1];
    if (search<0) return 'OOPS';
    for (let i=1;i<=search;i++){
        let newElement=parseInt(arrayFibonacci.slice(-1))+parseInt(arrayFibonacci.slice(-2,-1));
        arrayFibonacci.push(newElement)
    }
    return arrayFibonacci[search];

};

// Do not edit below this line
module.exports = fibonacci;
