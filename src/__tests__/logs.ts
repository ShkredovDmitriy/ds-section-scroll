import { message } from "../components/ds-modal/_lib/_log";

test('message: test, logs: true ', function() {
  expect(message("test", true)).toBe("test");
});

test('message: test, logs: false ', function() {
  expect(message("test", false)).toBe("");
});