const sum = () => {
  const { num1, num2 } = getNumbers();
  document.getElementById("total").textContent = num1 + num2;
};

const multiply = () => {
  const { num1, num2 } = getNumbers();
  document.getElementById("total").textContent = num1 * num2;
};

const getNumbers = () => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  return {
    num1,
    num2,
  };
};

export const Calc = {
  sum,
  multiply,
};
