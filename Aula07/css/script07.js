// Exercício 7: Calcule a área de um triângulo.

alert("Área de Triângulo");

let baseTriangulo = parseFloat(prompt("Informe o valor da base do triângulo em centímetros: "));

let alturaTriangulo = parseFloat(prompt("Informe o valor da altura do triângulo em centímetros: "));

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

alert("A área total do triângulo de base " + baseTriangulo + "cm e altura " + alturaTriangulo + "cm é: " + areaTriangulo + "cm²");