import { Form } from "./classes/Form";

export default function buildForm() {
  return new Form('test', 'default', {method: 'post'});
}

console.log(new Form('test', 'default', {method: 'post'}))