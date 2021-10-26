function mudaTMB(){
    let tmb = document.getElementById('resultTMB');
    tmb.innerHTML = '<input type="text" name="tmb" id="tmb" size="50" value="Seu gasto em repouso é de  ' + calcTMB() + 'kcal." disabled>';
}

function calcTMB(){

    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let idade = document.getElementById('idade').value;

    let calcTMB;

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
function mudaTDEE(){
    let tdee = document.getElementById('resultTDEE');
    tdee.innerHTML = '<input type="text" name="tdee" id="tdee" size="50" value="O seu gasto total diário é de ' + calcTDEE() + 'kcal" disabled>';
}

function calcTDEE(){

    let resultTMB = calcTMB();
    let atividade = document.querySelector('input[name="atividade"]:checked').value;

    return resultTMB * atividade;
    
}

function mudaObjetivo(){
    let objetivo = document.getElementById('resultObjetivo');
    objetivo.innerHTML = '<input type="text" name="objetivo" id="objetivo" size="50" value="Seu consumo diário de calorias deve ser de ' + calcObjetivo() + 'kcal." disabled>';
}


function calcObjetivo(){

    let resultTDEE = calcTDEE();
    let objetivo = document.querySelector('input[name="objetivo"]:checked').value;
    
    return resultTDEE * objetivo;
}

function mudaMacros(){
    let macros = document.getElementById('resultMacros');
    let resultMacros = calcMacros();
    macros.innerHTML = '<input type="text" name="proteina" id="proteina"  size="25" value="Proteína: '+ resultMacros.proteina +'gr  " disabled> <input type="text" name="gordura" id="gordura"  size="25" value="Gordura: '+resultMacros.gordura+'gr " disabled> <input type="text" name="carboidrato" id="carboidrato"  size="25" value="Carboidrato: '+resultMacros.carboidrato+'gr " disabled>'

}
function calcMacros(){

    let resultObjetivo = calcObjetivo();
    let peso = document.getElementById('peso').value;
    let estadoAtual = document.querySelector('input[name="estadoAtual"]:checked').value;

    let proteina = peso * estadoAtual;
    let gordura = peso * 0.8;
    let carboidrato = [resultObjetivo - (proteina * 4) - (gordura * 9)]/4;

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