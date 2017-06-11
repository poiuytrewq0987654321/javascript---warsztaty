'use strict';

/*
//parsowanie stringów do obiektów JSON
var text = '{'+
    '"pracownicy":['+
    '{"firstname":"Krystian", "lastname": "Dziopa"},' +
    '{"firstname":"Anna", "lastname": "Szapiel"},' +
    '{"firstname":"Piotr", "lastname": "Żmuda"}' +
    ' ] ' +
    '}';

var jsonPracownicy = JSON.parse(text);*/


/*//wyświetlenie elementów firstname, lastname oraz index z tablicy pracownicy
var jsonPracownicy = {
    "pracownicy": [
        {"firstname":"Krystian", "lastname": "Dziopa"},
        {"firstname":"Anna", "lastname": "Szapiel"},
        {"firstname":"Piotr", "lastname": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element,index){
    console.log(index+' '+element.lastname+' '+element.firstname);
})*/


//zmiana tła paragrafów 

function ustawTlo(){
var zmiana = document.getElementById("pierwszy");
var zmiana2 = document.getElementById("drugi");
zmiana.style.backgroundColor = "#ff0011";
zmiana2.style.backgroundColor = "#ffa022";
}

















