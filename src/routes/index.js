const express = require('express');
const router = express.Router();
const dato= require('../scripts');
const datos= dato.readBooks();
const path = require('path');


router.get('/', (req, res)=>{
    res.render('index.html', {title: 'Biblioteca'});
});
router.get('/ListaLibros', (req, res)=>{
    res.render('listarLibros.html',  {title: "Listar libros",datos: datos});
});
router.get('/Devolucion', (req, res)=>{
    res.render('devolucion.html', {title: 'Devolucion libros',datos: datos});
    if(req.method == 'POST'){
        console.log("???????????")
    }
});
router.get('/LibrosDisponibles', (req, res)=>{
    res.render('librosDisponibles.html', {title: 'Libros disponibles', datos:datos});
});
router.get('/res.js', (req, res)=>{
    res.sendFile(path.join(__dirname, '../res.js'))
});
router.get('/books.json', (req, res)=>{
    res.sendFile(path.join(__dirname, '../books.json'))
});
router.post('/books.json', (req, res)=>{
    res.sendFile(path.join(__dirname, '../books.json'))
});

module.exports = router;