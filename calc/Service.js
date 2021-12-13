function calcTMB(sexo, peso, altura, idade) {

    if (sexo == "Feminino") {

        return Math.round(655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));

    } else {

        return Math.round(66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

    }


};

function calcTDEE(TMB, atividade) {

    return Math.round(TMB * atividade);

};

function calcObjetivo(TDEE, objetivo) {

    return Math.round(TDEE * objetivo);

};

function calcMacros(objetivo, peso, estadoAtual) {

    let proteina = peso * estadoAtual;
    let gordura = peso * 0.8;
    let carboidrato = [objetivo - (proteina * 4) - (gordura * 9)] / 4;

    return macros = {
        proteina: Math.round(proteina),
        gordura: Math.round(gordura),
        carboidrato: Math.round(carboidrato)
    }
};

function resultCalc(data) {
    let sexo = data.sexo;
    let peso = data.peso;
    let altura = data.altura;
    let idade = data.idade;
    let atividade = data.atividade;
    let objetivo = data.objetivo;
    let estadoAtual = data.estadoAtual;

    let TMB = calcTMB(sexo, peso, altura, idade);
    let TDEE = calcTDEE(TMB, atividade);
    let Objetivo = calcObjetivo(TDEE, objetivo);
    let Macros = calcMacros(Objetivo, peso, estadoAtual);

    return result = {
            sexo,
            peso,
            altura,
            TMB,
            TDEE,
            Objetivo,
            Macros
        }
;

};

module.exports = resultCalc;

// module.exports = calcTMB, calcTDEE, calcObjetivo, calcMacros;