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
var result = new calcTDEE("Homem", 52, 165, 38, "Muito Intenso");

console.log("Sua TMB é de " +
            result.calcTMB() +
            "kcal e o seu TDEE é de " +
            result.TDEE()
            + "kcal");


// console.log(result);
// console.log(result.calcTMB());
// console.log(result.TDEE());

// FORMULA TMB - Taxa metabólica basal (Estas são as calorias que seu corpo gasta simplesmente para sobreviver, ou seja, se você ficar 24 hrs dormindo.)
// Para as mulheres: 655 + (9,6 x peso em kg) + (1,8 x altura em cm) – (4,7 x idade em anos)
// Para os homens: 66 + (13,7 x peso em kg) + (5 x altura em cm) – (6,8 x idade em anos
 
// FORMULA TDEE (Estas são as calorias que seu corpo gasta em média para sobreviver e realizar as suas atividades do cotidiano, considerando o seu nível médio de atividade.)
//  NIVEL DE ATIVIDADE - FATOR MULTIPLICATIVO
//  SEDENTÁRIO -                1.2
//  EXERCÍCIO LEVE -            1.375
//  EXERCÍCIO MODRADO -         1.55
//  EXERCÍCIO INTENSO -         1.725
//  EXERCÍCIO MUITO INTENSO -   1.9

// OBJETIVO

// EMAGRECER - DEFICIT DE 15% DO TDEE
// EMAGRECER AGRESSIVO - DEFICIT DE 30% DO TDEE
// MANTER - TDEE
// GANHAR MASSA - SUPERAVIT 15% DO TDEE
// GANHAR MASSA AGRESSIVO - SUPERAVIT 30% DO TDEE

// Formula Macronutrientes

// ESTADO ATUAL
// 1-Magrelo(a) | 2-Massa magra considerável e BF não muito alto | 3-Falso(a) Magro(a) | 4-Muito acima do peso

// 1 - PROTEINA: 2 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS
// 2 - PROTEINA: 2.5 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS
// 3 - PROTEINA: 2.2 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS
// 3 - PROTEINA: 1.8 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS