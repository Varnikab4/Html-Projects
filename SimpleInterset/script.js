document.addEventListener('DOMContentLoaded', function () {
    
const calculateButton =document.getElementById('calculate');
const clearButton = document.getElementById('clear'); 
const principalInput =document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', function () {
const principal = parseFloat(principalInput.value);
const rate = parseFloat(rateInput.value) ;
const time = parseFloat(timeInput.value);

const simpleInterest = ((principal * rate *
time)/100).toFixed(2);

resultElement.textContent = `Simple Interest: 
$${simpleInterest}`;
});


clearButton.addEventListener('click', function () {
principalInput.value = '';
rateInput.value = '';
timeInput.value = '';
resultElement.textContent = '';
});
});
