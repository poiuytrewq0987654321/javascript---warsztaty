'use strict';

var wszystkieZgody = document.getElementById('wszystkie-zgody');

var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');

var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');

console.log(wszystkieZgody);

function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;

}

wszystkieZgody.onchange = stanCheckboxa;

/*zamiast 'onchange' mozna uzyc ponizszego zapisu:
wszystkieZgody.addEventListener("change",stanCheckboxa);*/
