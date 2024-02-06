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

    if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
        var titleFive = $("<h3>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
        var imgFive = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
        var colFive = $("<div>").addClass("col-md-2.5");
        var cardFive = $("<div>").addClass("card bg-primary text-white");
        var cardBodyFive = $("<div>").addClass("card-body p-2");
        var humidFive = $("<div>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");
        var tempFive = $("<p>").addClass("card-text").text("Temperature " + data.list[i].main.temp + " °F");
    }
}

// merging on the page
colFive.append(cardFive.append(cardBodyFive.append(titleFive, imgFive, tempFive, humidFive)));

// append card to col
$("#forecasrt . row").append(colFive);


// Function to pull previous searches
var history = JSON.parse(localStorage.getItem("history")) || [];

// history array 
if (history.length > 0) {
    weatherFunction(history[history.length - 1]);
}

// Adding a row for each element in history
for (var i = 0; i < history.length; i++) {
    createRow(hisotry[i]);
}

// puts the searched cities underneath the previous 
function createRow(text) {
    var listItem = $("<li>").addClass("list-group-item").text(text);
    $("history").append(listItem);
}

// click function listener
$("history").on("click", "li", function () {
    weatherFunction($(this).text());
    weatherForecast($(this).text());
});

function weatherFunction(searchTerm) {

    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=9f112416334ce37769e5c8683b218a0d",

    }).then(function (data) {
        if (history.indexOf(searchTerm) === -1){
            history.pushState(searchTerm);
            localStorage.setItem("history", JSON.stringify(history));
            createRow(searchTerm);
        }

// clearing out old content from previous days

$("#today").empty();

var title =





    })













































}