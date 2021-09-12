import { DocumentHelper } from "../../src/helpers/documentHelper";
import { Calc } from "../../src/services/calc";

describe("Test to Calc", () => {
  const spy = jest.spyOn(document, "getElementById").mockReturnValue({});
  const numbers = {
    num1: 5,
    num2: 2,
  };

  beforeEach(() => {
    jest.spyOn(DocumentHelper, "getNumbers").mockReturnValue(numbers);
  });

  test("should sum two numbers", () => {
    expect(Calc.sum()).toBe(numbers.num1 + numbers.num2);
    expect(spy).toHaveBeenCalled();
  });

  test("should sum two numbers", () => {
    expect(Calc.multiply()).toBe(numbers.num1 * numbers.num2);
    expect(spy).toHaveBeenCalled();
  });
});
