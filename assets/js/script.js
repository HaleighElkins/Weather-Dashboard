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
                success: function (data) {
                    console.log('Weather Forecast Data:', data);
    
                    $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");
        
                    // Additional processing or UI updates can be done here
                },
                error: function (xhr, status, error) {
                    // Handle errors
                    console.error('Error fetching weather forecast:', status, error);
                }
            });
        }

    // A Loop to creat a new ard for 5 day weather

for (var i = 0; i < data.list.length; i++) {

    if (data.list[i].dt_txt.indexOf("15:00:00") !== -1){
        var titleFive =
        var imgFive = 
        var colFive =
        var cardFive =
        var cardBodyFive =
        var humidFive = 
        var tempFive =
    }
}

// merging on the page

// append card to col









// Function to pull previous searches

// history array 

// Adding a row for each element in history

// puts the searched cities underneath the previous 

// click function listener













































}