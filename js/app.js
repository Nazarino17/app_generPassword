const input = document.querySelector('.random__pass');
const btn = document.querySelector('.generation__pass');
const copy = document.querySelector('.copy__pass');
const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');
const check3 = document.querySelector('#check3');
const check4 = document.querySelector('#check4');
const amoutn = document.querySelector('#amoutn');



function getRandom(passlength){
    let arren = ['abcdefghijklmnopqrstuvwxyz'];
    let arrnum = ['123456789'];
    let arrsymb = ['!@#$%&?-+=~'];
    let arrenUp = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    let allChar = arren + arrnum + arrsymb + arrenUp;
    let randomStr = '';

    if (check1.checked && check2.checked && check3.checked && check4.checked) {
        amoutn.value = null;
    }  
    if(check1.checked) {
        allChar = allChar.replace(/[a-z]/g, "");
    }  
    if(check2.checked) {
        allChar = allChar.replace(/[A-Z]/g, "");
    }  
    if(check3.checked) {
        allChar = allChar.replace(/[&\/\\#,+()$~%.'":=-@!-*?<>{}]/g, '');
    }  
    if (check4.checked){
        allChar = allChar.replace(/[0-9]/g, '');
    }

    for ( let i = 0; i < passlength; i++) {
        let randomNum = Math.floor(Math.random() * allChar.length);
        randomStr += allChar[randomNum];
    }
    return randomStr;
}

btn.addEventListener('click', () => {
    function getAmountNum() {
        let getNum = amoutn.value;
        if (getNum >= 13){
            amoutn.value = null;
            amoutn.setAttribute("placeholder", 'Enter under 13');
        } else {
            return getNum;
        }
    }

    let password = getRandom(getAmountNum());
    input.value = password;
});

copy.addEventListener('click', () => {
    input.select();
    navigator.clipboard.writeText(input.value);
}); 



