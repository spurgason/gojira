import { JSDOM } from 'jsdom';

export class Form {
  name: string;
  type: string;
  options: object;
  formElement!: HTMLFormElement;

  constructor(name: string, type: string = 'default', options: object = {}) {
    this.name = name;
    this.type = type;
    this.options = options;

    this.init();
  }

  init() {
    const { window } = new JSDOM();
    const document = window.document;

    const form = document.createElement('form');

    this.formElement = Object.assign(form, {
      name: this.name,
      id: this.name,
      ...this.options,
    });

    return this;
  }
}
