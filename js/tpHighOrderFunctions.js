//   Feliz Primavera !

//   TP: Funciones de orden superior en JavaScript - 09/09/2022

//   Dado el siguiente array, resolver utilizando funciones de orden superior:

const setUps = [
  {
    processor: "i7 11700K",
    ram: "Fury 32GB",
    gpu: "RTX 3070 Ti",
    storage: 2,
    storageType: "SSD",
    monitor: 144,
    price: 2199,
  },
  {
    processor: "ryzen 9 5900X",
    ram: "Fury 32GB",
    gpu: "Radeon RX 6500",
    storage: 4,
    storageType: "SSD",
    monitor: 144,
    price: 2499,
  },
  {
    processor: "ryzen 7 5700G",
    ram: "HyperX 16GB",
    gpu: "Radeon RX 6500",
    storage: 2,
    storageType: "SSD",
    monitor: 60,
    price: 1599,
  },
  {
    processor: "i5 10400F",
    ram: "HyperX 16GB",
    gpu: "RTX 2060",
    storage: 1,
    storageType: "SSD",
    monitor: 60,
    price: 1499,
  },
  {
    processor: "i9 12900",
    ram: "Fury 8GB",
    gpu: "RTX 2060",
    storage: 4,
    storageType: "HDD",
    monitor: 60,
    price: 999,
  },
  {
    processor: "ryzen 5 5600X",
    ram: "HyperX 8GB",
    gpu: "Radeon PRO W6400",
    storage: 4,
    storageType: "HDD",
    monitor: 60,
    price: 949,
  },
];

// 1) Filtrar aquellos setUps que posean mas de 8GB de memoria RAM.

function punto1() {
  let h1 = document.getElementById("1");
  const setups8gb = setUps.filter(
    (e) => +e.ram.slice(e.ram.length - 4, e.ram.length - 2) > 8
  );
  console.log(setups8gb);
  h1.innerHTML = "Setups con más de 8gb de ram:  ".concat(setups8gb.length);
}
// 2) Aplicar el 15% de descuento en el precio del setUp correspondiente al "processor: ryzen 9 5900X" y mostrar el nuevo "price".

function punto2() {
  let h1 = document.getElementById("2");
  const processor = setUps.find((e) => e.processor == "ryzen 9 5900X");
  const nuevoprice = (85 * processor.price) / 100;
  console.log(nuevoprice);
  h1.innerHTML = "Ryzen 9 con 15% de descuento:  ".concat(nuevoprice);
}

// 3) Ordenar de mayor a menor los setUps en funcion de su capacidad de almacenamiento o "storage".

function punto3() {
  console.log("punto 3");
  let h1 = document.getElementById("3");
  const sorted = setUps.sort(
    (firstSetup, secondSetup) => firstSetup.storage - secondSetup.storage
  );
  sorted.forEach((e) => console.log( e.processor.concat(' storage: ', e.storage)));
  h1.innerHTML = 'En la consola';
}

// 4) Mostrar por consola solo el valor de la frecuencia de "monitor" de todos los setUps.

function punto4() {
  let h1 = document.getElementById("4");
  const frecuencias = setUps.map((e) => e.monitor);
  console.log(frecuencias);
  h1.innerHTML = "frecuencias: ".concat(frecuencias);
}

// 5) Venta al por mayor. Calcular el total de todos los precios o "price" multiplicados por 5.

function punto5() {
  let h1 = document.getElementById("5");
  const precios = setUps.map((e) => e.price * 5);
  console.log(precios);
  h1.innerHTML = "precios por mayor: ".concat(precios);
}

// 6) Encontrar el setUp cuya "gpu" sea "Radeon RX 6600".

function punto6() {
  let h1 = document.getElementById("6");
  const setup = setUps.find((e) => e.gpu == "Radeon RX 6600");
  console.log(setup);
  h1.innerHTML = "setup con gpu Radeon RX 6600: ".concat(
    setup ? setup.values() : "no hay"
  );
}

// 7) Agregar una nueva propiedad a todos los setUps definida como: "stock: 10".

function punto7(){
  console.log("Punto 7");
  let h1 = document.getElementById("7");
  setUps.map(e => e.stock = 10);
  setUps.forEach(e=> console.log( "stock del setup", setUps.indexOf(e)+1,": ", e.stock));
  h1.innerHTML = "En consola";
}

// 8) Filtrar los nuevos setUps del punto 7 cuyo precio sea mayor que 1500 y restar en 2 unidades el stock del setUp cuya gpu sea "RTX 3070 Ti".

function punto8(){
  console.log("Punto 8");
  let h1 = document.getElementById("8");
  setUps.map(e => e.stock = 10);
  const filtered = setUps.filter(e => e.price > 1500);
  const rtx = setUps.find(e => e.gpu == 'RTX 3070 Ti');
  rtx.stock = rtx.stock - 2;
  setUps.forEach(e=> console.log( "stock del setup", e.processor, e.gpu,": ", e.stock));
  console.log('setups con precio mayor a 1500');
  filtered.forEach(e => console.log(e));
  h1.innerHTML = "En consola";
}