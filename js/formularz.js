'use strict';

var pobierzImie = document.getElementById('formularz');
//console.log(pobierzImie);


//zablokowanie dzialania przycisku submit oraz wyciagniecie danych z pol input tego formularza
pobierzImie.addEventListener('click',function(event){
    event.preventDefault();
    console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);
});











