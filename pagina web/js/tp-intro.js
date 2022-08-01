//<  >

function ejercicio1() {
    let num1 = +prompt("numero 1");
    let num2 = +prompt("numero 2");
    if (num1 > num2){
        alert('Es mayor el num 1: '.concat(num1, ' Es menor el num 2: ', num2))
    }
    else if (num1 < num2){
        alert('Es mayor el num 2: '.concat(num2, ' Es mayor el num 1: ', num1))
    }
    else{
        alert('son iguales')
    } 
}
function ejercicio2() {
    let num1 = +prompt("numero 1");
    while (isNaN(num1)) {
        num1 = +prompt("escriba un NUMERO");
    }
    
    let num2 = +prompt("numero 2");
    while (isNaN(num2)) {
        num2 = +prompt("escriba un NUMERO");
    }
    if (num1 > num2){
        alert(' Es mayor el num 1: '.concat(num1, '  Es menor el num 2: ', num2))
    }
    else if (num1 < num2){
        alert(' Es mayor el num 2: '.concat(num2, '  Es menor el num 1: ', num1))
    }
    else{
        alert('son iguales')
    } 
}
function ejercicio3() {
    let media = 0
    let suma = 0;
    let num1 = 0
    let cant_nums = 1;
    while (num1 >= 0){
        num1 = +prompt("ingrese un numero");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        if (num1 >= 0){
            suma += num1;
            media = suma / cant_nums;     
            cant_nums++       
        }

    }
    alert('Suma: '.concat(suma, '  Media: ', media))

}
function ejercicio4() {
    let num1 = +prompt("numero 1");
    while (isNaN(num1)) {
        num1 = +prompt("escriba un NUMERO");
    }
    
    let num2 = +prompt("numero 2");
    while (isNaN(num2)) {
        num2 = +prompt("escriba un NUMERO");
    }
    for (i=1; i<11; i++){
        alert(num1 + '*'.concat(i, ' = ', num1*i))
    }
    for (i=1; i<11; i++){
        alert(num2 + '*'.concat(i, ' = ', num2*i))
    }
}
function ejercicio5() {
    let num1 = +prompt("numero 1");
    while (isNaN(num1)) {
        num1 = +prompt("escriba un NUMERO");
    }
    
    let num2 = +prompt("numero 2");
    while (isNaN(num2)) {
        num2 = +prompt("escriba un NUMERO");
    }
    for (i=num1+1; i<num2; i++){
        alert(i)
    }
}
function ejercicio6() {
    let num1 = +prompt("numero 1");
    while (isNaN(num1)) {
        num1 = +prompt("escriba un NUMERO");
    }
    
    let num2 = +prompt("numero 2");
    while (isNaN(num2)) {
        num2 = +prompt("escriba un NUMERO");
    }
    for (i=num1+1; i<num2; i++){
        if (i % 2 != 0){
            alert(i)
        }
    }
}
function ejercicio7() {
    let num1 = +prompt("numero 1");
    while (isNaN(num1)) {
        num1 = +prompt("escriba un NUMERO");
    }
    if (num1 % 2 == 0){
        alert("el numero es par")
    }else{
        alert('el numero es impar')
    }
}
function ejercicio8() {
    let array = []
    for (i=0; i<6; i++){
        let num1 = +prompt("ingrese un numero del 1 al 10: ");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        array.push(num1);
    }
    let min = 11;
    let max = 0;

    for (i of array){
        if (i < min){
            min = i;
            console.log(i);
        }
        if (i > max){
            min = i;
            console.log(i);
        }
    }
    alert('El mayor es: '.concat(max, 'el menor es: ', min))
}
function ejercicio9() {
    return
}
function ejercicio10() {
    return
}
function ejercicio11() {
    return
}
function ejercicio12() {
    return
}
function ejercicio13() {
    return
}
function ejercicio14() {
    return
}
function ejercicio15() {
    return
}