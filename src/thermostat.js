function Thermostat() {
  this.temperature = 20;
  this.power_saving = true;
};

Thermostat.prototype.up = function() {
  var max_temp;
  if (this.power_saving) { max_temp = 25; }
  else { max_temp = 32; }
  this.temperature + 1 < max_temp ? this.temperature += 1 : this.temperature = max_temp;
};

Thermostat.prototype.down = function() {
  this.temperature - 1 > 10 ? this.temperature -= 1 : this.temperature = 10;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.current_usage = function() {
  if (this.temperature < 18) { return "low-usage"; }
  else if (this.temperature < 25)  { return "medium-usage"; }
  else { return "high-usage"; }
};

Thermostat.prototype.toggle_power_saving = function() {
  if (this.power_saving) { this.power_saving = false; } 
  else { this.power_saving = true; if (this.temperature > 25) { this.temperature = 25; }}
};