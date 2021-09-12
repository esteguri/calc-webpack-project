import { Calc } from "./services/calc";
import "./styles/app.css";

document.getElementById("button-sum").addEventListener("click", Calc.sum);
document
  .getElementById("button-multiply")
  .addEventListener("click", Calc.multiply);
