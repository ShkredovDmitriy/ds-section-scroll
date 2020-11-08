import config from "../components/ds-modal/_lib/_config";
import configSet from "../components/ds-modal/_lib/_configSet";

  test('set logs = true', () => {
    configSet({logs: true})
    expect(config.logs).toBe(true);
  });
  
  test('set logs = false ', function() {
    configSet({logs: false})
    expect(config.logs).toBe(false);
  });

  test('set logs = wrong value ', function() {
    configSet({logs: "wrong"})
    expect(config.logs).toBe(false);
  });

  test('set outClick = true ', function() {
    configSet({outClick: true})
    expect(config.outClick).toBe(true);
  });

  test('set outClick = false ', function() {
    configSet({outClick: false})
    expect(config.outClick).toBe(false);
  });

  test('set outClick = wrong value ', function() {
    configSet({outClick: "wrong"})
    expect(config.outClick).toBe(false);
  });

  test('set zIndex = 100 ', function() {
    configSet({zIndex: 100})
    expect(config.zIndex).toBe(100);
  });

  test('set zIndex = 999999 ', function() {
    configSet({zIndex: 999999})
    expect(config.zIndex).toBe(100);
  });

  test('set zIndex = wrong value ', function() {
    configSet({zIndex: "wrong"})
    expect(config.zIndex).toBe(100);
  });
