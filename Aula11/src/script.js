// Objetos 

// Exemplo de objeto simples
const carro = {
    marca: "Porsche",
    modelo: 911,
    ano: 2022,
    acelerar: function () {
        return `${this.marca} ${this.modelo} acelerou. Vruum...`;
    },
};


console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.marca);
console.log(carro.acelerar());

console.log("");

const pessoa = {
    nome: "Kimberly",
    idade: 18,
    altura: 1.70,
    registro: "09643402667",
    empregado: true,
    apresentar: function () {

        let alturaDecimal = this.altura;

        let infoEmpregado = (this.empregado === true) ?
        "Sim" : "Não";

        // if(this.empregado === true) {
        //     infoEmpregado = "Sim";
        // } else {
        //     infoEmpregado = "Não";
        // }

        return `
        Meun nome é: ${this.nome}
        Minha idade é: ${this.idade}
        Minha altura é: ${alturaDecimal.toFixed(2)}
        E meu número de registro é: ${this.registro}
        Eu trabalho: ${infoEmpregado}
        `
    }
}

console.log(pessoa.apresentar());

document.querySelector("#ex1").innerHTML = "André Molina";

