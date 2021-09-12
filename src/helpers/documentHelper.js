const getNumbers = () => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  return {
    num1,
    num2,
  };
};

export const DocumentHelper = {
  getNumbers,
};
