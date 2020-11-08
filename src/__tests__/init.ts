import config from "../components/ds-modal/_lib/_config";

test('modal init default false', function() {
  expect(config.initialised).toBe(false);
});
