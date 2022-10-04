const input1 = document.querySelector('#dato1');
const input2 = document.querySelector('#dato2');
let sumar = document.querySelector('#sumarInputValues');
let restar = document.querySelector('#restarInputValues');
let multiplicar = document.querySelector('#multiplicarInputValues');
let dividir = document.querySelector('#dividirInputValues');
const resultSumar = document.querySelector('#result-sumar');
const resultRestar = document.querySelector('#result-restar');

sumar.addEventListener('click' , sumarInputValues);
restar.addEventListener('click' , restarInputValues);
multiplicar.addEventListener('click' , multiplicarInputValues);
dividir.addEventListener('click' , dividirInputValues);


function sumarInputValues(event){
    event.preventDefault();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    result.innerText = "Resultado: " + sumaImputs;
}

function restarInputValues(event){
    event.preventDefault();
    const restaImputs = Number(input1.value) - Number(input2.value);
    result.innerText = "Resultado: " + restaImputs;
}

function multiplicarInputValues(event){
    event.preventDefault();
    const multiImputs = Number(input1.value) * Number(input2.value);
    result.innerText = "Resultado: " + multiImputs;
}

function dividirInputValues(event){
    event.preventDefault();
    const divImputs = Number(input1.value) / Number(input2.value);
    result.innerText = "Resultado: " + divImputs;
}
