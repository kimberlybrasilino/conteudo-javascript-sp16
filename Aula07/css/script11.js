// Exercício 11: Converter idade em anos, meses e dias para dias.

alert("Calculando idade em dias");

let anos = parseInt(prompt("Informe sua idade em anos: "));

let meses = parseInt(prompt("Informe os meses: "));

let dias = parseInt(prompt("Informe os dias: "));

let totalDias = (anos * 365) + (meses * 30) + dias;

alert("Sua idade expressa em dias é: " + totalDias);