import config from "../components/ds-modal/_lib/_config";

  test('logs: false', () => {
    expect(config.logs).toBe(false);
  });

  test('outClick: false', () => {
    expect(config.outClick).toBe(true);
  });

  test('zindex: 9999', () => {
    expect(config.zIndex).toBe(9999);
  });
