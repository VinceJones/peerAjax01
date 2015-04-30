var cityData = null;
var cityHtml = null;
var name, pop, area, flight;

$(document).ready(function(){




    $(".getInfo").on('click', function(){

        if(cityData === null){
            $.get('data.json', function(data){
                cityData = data;
                console.log(cityData);
                name = cityData.Cities[0].name;
                pop = cityData.Cities[0].population;
                area = cityData.Cities[0].area;
                // flight = ;
            });
        } else {
            console.log("You already have data.");
        }

        if(cityHtml === null){
            $.get('locations.html', function(data){
                cityHtml = data;
                console.log(cityHtml);
            });
        } else {
            console.log("You already have that HTML.");
        }

        $(".location-container").append(cityHtml);
        $(".location-container").children().append("<li class='name'>Name: " + name + "</li>");
        $(".location-container").children().append("<li class='pop'>Population: " + pop + "</li>");
        $(".location-container").children().append("<li>Area: " + area + " (sq mi)</li>");

        console.log("here" + cityData);
        $(".location-container").find(".flightTime").text("Flight time: " + cityData.Cities[0].flight);



    });

    //$(".location-container").on('click', '.getInfo',)

});