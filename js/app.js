let printNumbers = (numbers) => {
  document.write(`<b>${numbers}</b><br>`);
};

let Ejercicio1 = () => {
  let numbers = " ";
  for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= i; j++) {
      numbers += i + " ";
    }
    printNumbers(numbers);
    numbers = " ";
  }
};

let Ejercicio2 = () => {
  let valor = parseInt(prompt("Ingrese el maximo valor de la piramide"));
  let numbers = " ";
  for (let i = valor; i > 0; i--) {
    for (let j = i; j >= 1; j--) {
      numbers += i + " ";
    }
    printNumbers(numbers);
    numbers = " ";
  }
};

let checkedValue = (valor) => {
  return valor <= 50 ? true : false;
};

let Ejercicio3 = () => {
  let valor = parseInt(prompt("Ingrese el maximo valor de la piramide"));
  if (!checkedValue(valor) && !Number(valor)) {
    alert(
      "No se permiten valores mayores a 50 y los valores tienen que ser numericos"
    );
  } else {
    let numbers = " ";
    for (let i = 1; i <= valor; i++) {
      for (let j = 1; j <= i; j++) {
        numbers += i + " ";
      }
      printNumbers(numbers);
      numbers = " ";
    }
  }
};

let isMultiplo = (number, multiplo) => {
  return number % multiplo === 0 ? ` (Es múltiplo de ${multiplo})` : "";
};

let spaceWithNumbers = (number) => {
  return number % 5 === 0 ? "<hr>" : "";
};

let Ejercicio4 = () => {
  for (let i = 1; i <= 500; i++) {
    document.write(
      `<b>${i} </b> ${isMultiplo(i, 4)} ${isMultiplo(
        i,
        9
      )}<br>${spaceWithNumbers(i)}`
    );
  }
};

let numberFilas = () => {
  return parseInt(prompt("Ingrese la cantidad de filas"));
};

let numberColumnas = () => {
  return parseInt(prompt("Ingrese la cantidad de columnas"));
};

let Ejercicio5 = () => {
  let filas = numberFilas();
  let columnas = numberColumnas();
  let matriz = crearMatrix(filas, columnas);
  document.write(matriz);
};

let crearMatrix = (filas, columnas) => {
  let matrix = [filas][columnas];
  var gfg = new Array(3);

  // Loop to create 2D array using 1D array
  document.write("Creating 2D array <br>");
};
