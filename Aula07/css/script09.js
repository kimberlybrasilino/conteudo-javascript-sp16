// Exercício 9: Calcule a área de um trapézio.

alert("Área de Trapézio");

let baseMaiorTrapezio = parseFloat(prompt("Informe o valor da base maior do trapézio em centímetros: "));

let baseMenorTrapezio = parseFloat(prompt("Informe o valor da base menor do trapézio em centímetros: "));

let alturaTrapezio = parseFloat(prompt("Informe o valor da altura do trapézio em centímetros: "));

let areaTrapezio = ((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio) / 2;

alert("A área total do trapézio de base maior " + baseMaiorTrapezio + "cm, base menor " + baseMenorTrapezio + "cm e altura " + alturaTrapezio + "cm é: " + areaTrapezio + "cm²");