function calcTDEE(sexo, peso, altura, idade, atividade) {
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.idade = idade;
    this.atividade = atividade;

    if (sexo == "Feminino") {
        this.calcTMB = function () {
            return 655 + (9.6 * this.peso) + (1.8 * this.altura) - (4.7 * this.idade);
        }
    } else {
        this.calcTMB = function () {
            return 66 + (13.7 * this.peso) + (5 * this.altura) - (6.8 * this.idade);
        }
    }

    this.TMB = this.calcTMB();

    if (this.atividade == "Sedentário") {
        this.TDEE = function () {
            return this.TMB * 1.2;
        }
    } else if (this.atividade == "Leve") {
        this.TDEE = function () {
            return this.TMB * 1.375;
        }
    } else if (this.atividade == "Moderado") {
        this.TDEE = function () {
            return this.TMB * 1.55;
        }
    } else if (this.atividade == "Intenso") {
        this.TDEE = function () {
            return this.TMB * 1.725;
        }
    } else if (this.atividade == "Muito Intenso") {
        this.TDEE = function () {
            return this.TMB * 1.9;
        }
    }
}
var result = new calcTDEE("Homem", 52, 165, 38, "Leve");

console.log("Sua TMB é de " +
            result.calcTMB() +
            "kcal e o seu TDEE é de " +
            result.TDEE()
            + "kcal");


// console.log(result);
// console.log(result.calcTMB());
// console.log(result.TDEE());

// FORMULA TMB
// Para as mulheres: 655 + (9,6 x peso em kg) + (1,8 x altura em cm) – (4,7 x idade em anos)
// Para os homens: 66 + (13,7 x peso em kg) + (5 x altura em cm) – (6,8 x idade em anos
