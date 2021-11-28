'use strict';
const path = require('path');

const fs = require('fs');
const Book = require(path.join(__dirname, 'book'));
let rawdata = fs.readFileSync(path.join(__dirname, 'books.json'));
let books = JSON.parse(rawdata);
let libros=[];
for(var i = 0; i < books.length; i++){
    const temp = new Book(books[i].titulo,books[i].autor,books[i].editorial,books[i].anio,books[i].paginas,books[i].estado);
    libros.push(temp);
}
function readBooks(){
    return libros;
}
exports.readBooks = readBooks