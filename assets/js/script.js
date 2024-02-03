$(document).ready(function () {
    // Search button
    $("#search-button").on("click", function () {
        // Get value
        var searchTerm = $("#search-value").val();
        // Empty input value field
        $("#search-value").val("");
        weatherForecast(searchTerm);
        weatherFunction(searchTerm);
    });
});

    // Search Button once pressing enter
    $("#search-button").keyup(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            var searchTerm = $("#search-button").val();
            weatherFunction(searchTerm);
            weatherForecast(searchTerm);
        }
    });

    // function weatherForecast(searchTerm)
 
    function weatherForecast(searchTerm) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&appid=9f112416334ce37769e5c8683b218a0d&units=imperial",
            success: function(data) {
                console.log('Weather Forecast Data:', data);
    
                // Just in case if there is an error
            },
            error: function(xhr, status, error) {
                // Handle errors
                console.error('Error fetching weather forecast:', status, error);
            }
        });
    }