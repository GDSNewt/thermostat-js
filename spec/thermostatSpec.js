'use strict';

describe('ThermostatJS', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Thermostat', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('goes up with up function', function () {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('goes down with down function', function () {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of 10', function () {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });
    it('has a max temp of 25 if power saving is on', function () {
      for (var i = 0; i < 10; i++) {
        thermostat.up();
      }      expect(thermostat.temperature).toEqual(25);
    });
    it('has a max temp of 32 if power saving is off', function () {
      thermostat.power_saving = false;
      for (var i = 0; i < 15; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
    it('resets the temp to 20 with the reset function', function () {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

    it('temp is 15 is low-usage', function () {
      for (var i = 0; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.current_usage()).toEqual("low-usage");
    });
    it('temp is 20 is medium-usage', function () {
      expect(thermostat.current_usage()).toEqual("medium-usage");
    });
    it('temp is 30 is high-usage', function () {
      for (var i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.current_usage()).toEqual("high-usage");
    });
    it('toggles the the power saving variable', function () {
      thermostat.toggle_power_saving();
      expect(thermostat.power_saving).toEqual(false);
      thermostat.toggle_power_saving();
      expect(thermostat.power_saving).toEqual(true);
    });
  });
});
