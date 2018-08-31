let myFancyVariable = window;
myFancyVariable.someFancyProperty = 'Eeliya'


console.log(myFancyVariable.someFancyProperty);

window.someFancyProperty = 'Something else';

console.log(myFancyVariable.someFancyProperty);