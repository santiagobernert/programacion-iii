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
        let num1 = +prompt("ingrese un numero: ");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        array.push(num1);
    }
    let min = 999999999;
    let max = -99999999;

    for (i of array){
        if (i < min){
            min = i;
            console.log(i);
        }
        if (i > max){
            max = i;
            console.log(i);
        }
    }
    alert('En el arreglo: '.concat(array, ' el mayor es: ', max, ' y el menor es: ', min))
}
function ejercicio9() {
    let array = []
    for (i=0; i<6; i++){
        let num1 = +prompt("ingrese un numero: ");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        array.push(num1);
    }
    alert("["+array+"]")
    for (i of array){
        alert(i)
    }
}
function merge(array1, array2) {
    let array = [];
    while (array1.lenght && array2.length) {
        if (array1[0] < array2[0]) {
            array.push(array1.shift())
            console.log(array1.shift())
        } else {
            array.push(array2.shift())
            console.log(array2.shift())
        }
    }
    return [...array, ...array1, ...array2]
}
function mergeSort(array){
    console.log(array)
    if (array.length == 1){
        return array
    }
    let mid = Number((array.length)/2);
    let a1 = array.slice(0, mid);
    console.log('a1', a1);
    let a2 = array.slice(mid);
    console.log('a2 ', a2);
    let x = mergeSort(a1);
    console.log('x ', x);
    let y = mergeSort(a2);
    console.log('y ', y);
    var a = [];

    while (a.lenth < array.length){
        try{
            if (x.lenght > 0){
                if (x[0] < y[0]){
                    a.push(x.shift());
                    console.log('x mas chico', x[0])}
                else{
                    a.push(y.shift());
                }}
            else{
                a.push(y.shift());
            }
        }
        catch{
            if( y.length > 0){
                if (x[0] < y[0]){
                    a.push(x.shift());
                    console.log('x mas chico', x[0])}
                else{
                    a.push(y.shift());
                }}
            else{ 
                a.push(x.shift());
            }}
        }
    console.log('arrayfinal', a);
    return a;
}
function ejercicio10() {
    let array = []
    for (i=0; i<6; i++){
        let num1 = +prompt("ingrese un numero: ");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        array.push(num1);
    }
    array = mergeSort(array)
    alert(array)
}
function ejercicio11() {
    
}
function ejercicio12() {
    let array = []
    for (i=0; i<6; i++){
        let num1 = +prompt("ingrese un numero: ");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        array.push(num1);
    }
    alert("El array tiene "+array.length+" elementos")
}
function ejercicio13() {
    let array = []
    for (i=0; i<6; i++){
        let num1 = +prompt("ingrese un numero: ");
        while (isNaN(num1)) {
            num1 = +prompt("escriba un NUMERO");
        }
        array.push(num1);
    }
    let busqueda = +prompt("ingrese un numero a buscar en el array: ");
    while (isNaN(busqueda)) {
        busqueda = +prompt("escriba un NUMERO");
    }
    if (array.includes(busqueda)){
        alert('el numero se encuentra en el '.concat((array.indexOf(busqueda)+1), ' lugar'))
    }else{
        alert('el numero no se encuentra en el array')
    }
}
function ejercicio14() {
    let awasasa = "AWSAWDWAWSWA";
    awasasa = awasasa.replaceAll('AWS', '');
    alert(awasasa)
    
}
function ejercicio15() {
    let awasasa = "AWSAWDWAWSWA";
    awasasa = awasasa.split("").reverse().join("");
    awasasa = awasasa.replaceAll('AWS', '');
    alert(awasasa)
}