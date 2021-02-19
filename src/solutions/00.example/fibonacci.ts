import { step } from "../../utils/00.example/step";

export function fibonnaci(num) {
  if (typeof num !== "number") {
    throw new Error("Parameter must be a number");
  } else if (num < 0) {
    throw new Error("Number must be positive");
  }

  return step(Math.round(num));
}
