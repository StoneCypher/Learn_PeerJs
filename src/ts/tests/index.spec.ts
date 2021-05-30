
/**
 * @jest-environment jsdom
 */

import { message } from "../index";

test('Message is "Hello World"', () =>
  expect(message).toBe("Hello, world!"));
