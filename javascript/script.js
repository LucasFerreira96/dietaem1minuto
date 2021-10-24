
function calcular(){
      
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var idade = document.getElementById('idade').value;
    var atividade = document.querySelector('input[name="atividade"]:checked').value;
    var objetivo = document.querySelector('input[name="objetivo"]:checked').value;
    var estadoAtual = document.querySelector('input[name="estadoAtual"]:checked').value;

    var resultTMB = calcTMB(sexo, peso, altura, idade);
    var resultTDEE = calcTDEE(resultTMB, atividade);
    var resultObjetivo = calcObjetivo(resultTDEE, objetivo);
    var resultMacros = calcMacros(peso, estadoAtual, resultObjetivo);

    console.log("Seu gasto em repouso é de " +
            resultTMB +
            "kcal. O seu gasto total diário é de " +
            resultTDEE + 
            "kcal. Então, você deve consumir "+
            resultObjetivo + "kcal por dia para chegar ao seu objetivo");

    console.log("Os seus macronutrientes diários são: " +
                resultMacros.proteina + " gramas de protéina, " +
                resultMacros.gordura + " gramas de gordura e " +
                resultMacros.carboidrato + " gramas de carboidrato.")
};

function calcTMB(sexo, peso, altura, idade) {

    var calcTMB;

    if (sexo == "Feminino") {
        calcTMB = function () {
            return 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
        }
    } else {
        calcTMB = function () {
            return 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
        }
    }

    return calcTMB();
}

function calcTDEE(resultTMB, atividade){

    return resultTMB * atividade;
    
}

function calcObjetivo(resultTDEE, objetivo){
    return resultTDEE * objetivo;
}

function calcMacros(peso, estadoAtual, resultObjetivo){
    var proteina = peso * estadoAtual;
    var gordura = peso * 0.8;
    var carboidrato = [resultObjetivo - (proteina * 4) - (gordura * 9)]/4;

    return macros = {
        proteina: proteina,
        gordura: gordura,
        carboidrato: carboidrato
    }
}

// // FORMULA TMB - Taxa metabólica basal (Estas são as calorias que seu corpo gasta simplesmente para sobreviver, ou seja, se você ficar 24 hrs dormindo.)
// // Para as mulheres: 655 + (9,6 x peso em kg) + (1,8 x altura em cm) – (4,7 x idade em anos)
// // Para os homens: 66 + (13,7 x peso em kg) + (5 x altura em cm) – (6,8 x idade em anos
 
// // FORMULA TDEE (Estas são as calorias que seu corpo gasta em média para sobreviver e realizar as suas atividades do cotidiano, considerando o seu nível médio de atividade.)
// //  NIVEL DE ATIVIDADE - FATOR MULTIPLICATIVO
// //  SEDENTÁRIO -                1.2
// //  EXERCÍCIO LEVE -            1.375
// //  EXERCÍCIO MODRADO -         1.55
// //  EXERCÍCIO INTENSO -         1.725
// //  EXERCÍCIO MUITO INTENSO -   1.9

// // OBJETIVO

// // EMAGRECER - DEFICIT DE 15% DO TDEE
// // EMAGRECER AGRESSIVO - DEFICIT DE 30% DO TDEE
// // MANTER - TDEE
// // GANHAR MASSA - SUPERAVIT 15% DO TDEE
// // GANHAR MASSA AGRESSIVO - SUPERAVIT 30% DO TDEE

// // Formula Macronutrientes

// // ESTADO ATUAL
// // 1-Magrelo(a) | 2-Massa magra considerável e BF não muito alto | 3-Falso(a) Magro(a) | 4-Muito acima do peso

// // 1 - PROTEINA: 2 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS
// // 2 - PROTEINA: 2.5 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS
// // 3 - PROTEINA: 2.2 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS
// // 3 - PROTEINA: 1.8 GRAMAS POR KILO CORPORAL | GORDURA: 0.8 GRAMAS POR KILO CORPORAL | CARBOIDRATO: RESTANTE DAS CALORIAS DISPONÍVEIS