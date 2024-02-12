import { Number } from "./classes/Number";

export default function format(number: string|number) {

  return new Number(number);
}

console.log(format(12).currency())