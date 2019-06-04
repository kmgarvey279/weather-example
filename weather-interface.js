$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let WeatherService = new WeatherService();
    let promise = weatherService.getWeatherByCity(city);

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }.function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}. Please try again.`);
    });
  });

});
