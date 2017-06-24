'use strict';

var wszystkieZgody = document.getElementById('wszystkie-zgody');
var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');
var wyslijBtn = document.getElementById('wyslij');
var inputImie = document.getElementById('name');
var inputEmail = document.getElementById('email');
var wiadomosc = document.getElementById('wiadomosc');



function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;

}

wszystkieZgody.onchange = stanCheckboxa;

/*zamiast 'onchange' mozna uzyc ponizszego zapisu:
wszystkieZgody.addEventListener("change",stanCheckboxa);*/


function walidujFormularz(event){
    
    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>';
    
  //trim() usuwa spacje przed i po stringu wiec wpisanie samych spacji juz nie przjedzie
    
    if(inputImie.value.trim() == ""){
        var msgImie = document.createElement('li');
        msgImie.innerHTML = "Wpisz imię!";
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
    }
    
    if(inputEmail.value.trim() == ""){
        var msgEmail = document.createElement('li');
        msgEmail.innerHTML = "Wpisz email!";
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();
    }
    
    if(! zgodaMarketingowa1.checked){
        var msgZgoda = document.createElement('li');
        msgZgoda.innerHTML = "Zaznacz zgodę marketingową nr 1!";
        wiadomosc.appendChild(msgZgoda);
        event.preventDefault();
    }
}

document.getElementById('wyslij').addEventListener('click',walidujFormularz);














