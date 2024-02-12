export class Number {
  value: string|number;

  constructor(value: string|number) {
    this.value = value;
  }

  currency (symbol: string = '$') {
    return `${symbol}${this.value}`
  }
}