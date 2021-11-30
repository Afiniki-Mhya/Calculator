//! we are implementing addition
//!By the way this is Afiniki's code

const addition = (...variableOne) => {
  let i = 0;
  variableOne.forEach((item) => {
    i = i + item;
  });
  return i;
};

console.log(addition(1, 2, 3, 7, 8, 8, 9, 9));

const subtraction = (variableOne, variabletwo) => {
  let i = 0;

  return variableOne - variabletwo;
};

console.log(subtraction(1, 3));

const multiplication = (variableOne, variabletwo) => {
  let i = 0;

  return variableOne * variabletwo;
};

console.log(multiplication(1, 3));

const division = (variableOne, variabletwo) => {
  let i = 0;

  let afiniki = variableOne / variabletwo;
  return Math.round(afiniki * 100) / 100;
};

console.log(division(1, 3));
