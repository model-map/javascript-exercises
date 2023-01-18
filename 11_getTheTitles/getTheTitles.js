const getTheTitles = function(booksDB) {
    /* let result=[];
    for (const book of booksDB) result.push(book['title']);
    return result; */

    // ANOTHER CODE
    return booksDB.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
