var cityData = null;
var cityHtml = null;
var name, pop, area, flight;


function displayCities(name, pop, area, flight) {
    $(".location-container").find(".name").text("Name: " + name);
    $(".location-container").find(".pop").text("Population: " + pop);
    $(".location-container").find(".area").text("Area: " + area + " (Sq Mi)");
    $(".location-container").find(".flight").text("Flight time: " + flight );
}



$(document).ready(function(){

    $(".getInfo").on('click', function(){

        if (cityHtml === null){
            $.get('locations.html', function(data){
                cityHtml = data;
            });
        } else {
            console.log("You already have that HTML.");
        }

        $(".location-container").append(cityHtml);

        if (cityData === null){
            $.get('data.json', function(data){
                cityData = data;
                console.log(cityData);
                name = cityData.Cities[0].name;
                pop = cityData.Cities[0].population;
                area = cityData.Cities[0].area;
                flight = cityData.Cities[0].flight;
            });
        } else {
            console.log("You already have data.");
        }

        displayCities(name, pop, area, flight);

    });

});