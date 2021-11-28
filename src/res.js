'use strict';
//const path = require('path');
var xhr = new XMLHttpRequest(),
    jsonArr,
    method = "GET",
    jsonRequestURL = "books.json";

//const fs = require('fs');
var datos;
fetch('books.json')
    .then(response => response.json())
    .then(data =>{
        datos=data
    })
    .catch(error => console.log(error));
function devolver(n){
    
    for(var i = 0; i < datos.length; i++){
        if(datos[i].titulo.localeCompare(n)==0){
            datos[i].estado="Diponible"
        }
    }
    console.log(datos)
    xhr.open(method, jsonRequestURL, true);
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            jsonArr = datos
            xhr.open("POST", jsonRequestURL, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(jsonArr);
        }
    };
    xhr.send(null);
    alert("El libro '"+n+"' ha sido devuelto")
}
function solicitar(n){
    
    for(var i = 0; i < datos.length; i++){
        if(datos[i].titulo.localeCompare(n)==0){
            datos[i].estado="En prestamo"
        }
    }
    console.log(datos)
    xhr.open(method, jsonRequestURL, true);
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            jsonArr = datos
            xhr.open("POST", jsonRequestURL, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.send(jsonArr);
        }
    };
    xhr.send(null);
    alert("El libro '"+n+"' ha sido prestado")
}