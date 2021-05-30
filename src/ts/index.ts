
import { Remote } from './remote';

const message = "Hello, world!";

const hello = () =>
  console.log(message);

window.onload = () => hello();

export { hello, message, Remote };
