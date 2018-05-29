//Funciones Matematicas
function add(number1, number2){
    let resultadoSuma = 0;
    resultadoSuma= number1 + number2;
    return resultadoSuma;
}

function multiply(number1, number2){
    let resultadoMulti= 0;
    resultadoMulti= number1 * number2;
    return resultadoMulti;
}

function pruebaFuncionesMatematicas(){
    multiply(36325, add(9824, 777));
}


//Ordenando Comida
function elegirComida(menu){
    if(menu.indexOf("ceviche")>=0){
        return "ceviche";
    }
    if(menu.indexOf("tacos al pastor")>=0){
        return "tacos al pastor";
    }
    if(menu.indexOf("empanada chilena")>=0){
        return "empanada chilena";
    }
    
    return "hamburguesa";
}

function pruebaOrdenandoComida(){
    elegirComida(["ceviche"]);
}
