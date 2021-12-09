function calcTMB(sexo, peso, altura, idade) {
    
    let calcTMB

    if (sexo == "Feminino") {
        calcTMB = function () {
            return Math.round(655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
        }
    } else {
        calcTMB = function () {
            return Math.round(66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
        }
    }
    

};

function calcTDEE(resultTMB, atividade){

    return Math.round(resultTMB * atividade);
    
};

function calcObjetivo(resultTDEE, objetivo){
    
    return Math.round(resultTDEE * objetivo);

};

function calcMacros(resultObjetivo, peso, estadoAtual){

    let proteina = peso * estadoAtual;
    let gordura = peso * 0.8;
    let carboidrato = [resultObjetivo - (proteina * 4) - (gordura * 9)]/4;

    return macros = {
        proteina: Math.round(proteina),
        gordura: Math.round(gordura),
        carboidrato: Math.round(carboidrato)
    }
};

let calc = {
    calcTMB,
    calcTDEE,
    calcObjetivo,
    calcMacros
};

module.exports = Calc;

// module.exports = calcTMB, calcTDEE, calcObjetivo, calcMacros;