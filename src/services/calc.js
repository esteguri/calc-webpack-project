import { DocumentHelper } from "../helpers/documentHelper";

const sum = () => {
  const { num1, num2 } = DocumentHelper.getNumbers();
  document.getElementById("total").textContent = num1 + num2;
  return num1 + num2;
};

const multiply = () => {
  const { num1, num2 } = DocumentHelper.getNumbers();
  document.getElementById("total").textContent = num1 * num2;
  return num1 * num2;
};

export const Calc = {
  sum,
  multiply,
};
