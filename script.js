var cityData = null;
var cityHtml = null;
var name, pop, area, flight;
var masterArray = [];


function displayCities(name, pop, area) {
        $(".location-container").find(".name").text("Name: " + name);
        $(".location-container").find(".pop").text("Population: " + pop);
        $(".location-container").find(".area").text("Area: " + area + " (Sq Mi)");
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


        if (cityData === null){
            $.get('data.json', function(data){

                    $(".location-container").append(cityHtml);
                    cityData = data;
                    console.log(cityData);
                    name = cityData.Cities[0].name;
                    pop = cityData.Cities[0].population;
                    area = cityData.Cities[0].area;

                    displayCities(name, pop, area);
            });
        } else {
            console.log("You already have data.");
        }



    });

});