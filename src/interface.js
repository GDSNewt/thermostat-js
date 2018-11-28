thermostat = new Thermostat();

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var apikey = '&appid=73978c0a0da486984805d63bc449687f';
  var units = '&units=metric';
  $.get(url + city + apikey + units, function(data) {
    $('#this-city').text(city);
    $('#current-temperature').text(data.main.temp);
  });
};

displayWeather('London');

$(document).ready(function() {
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#temp_display').text(thermostat.temperature);

  $('#temp_up').click(function() {
    thermostat.up();
  });

  $('#temp_down').click(function() {
    thermostat.down();
  });

  $('#power_saving').click(function() {
    thermostat.toggle_power_saving();
    if (thermostat.power_saving) { $('#power_saving').text('ON'); }
    else { $('#power_saving').text('OFF'); }
  });

  $('#reset').click(function() {
    thermostat.reset();
  });

  $(document).on( 'click', function () {
    $('#temp_display').text(thermostat.temperature);
    if (thermostat.current_usage() === 'low-usage') { $('#home').css('color', '#00ff00'); }
    else if (thermostat.current_usage() === 'medium-usage') { $('#home').css('color', '#000000'); }
    else if (thermostat.current_usage() === 'high-usage') { $('#home').css('color', '#ff0000'); }
  });
});