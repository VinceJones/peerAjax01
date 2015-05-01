var cityData = null;
var cityHtml = null;
var name, pop, area, image;
var masterArray = [];


function displayCities(name, pop, area, image) {

        $(".location-container").find(".cityImage").hide().fadeIn("slow").append(image);
        $(".location-container").find(".name").append(name);
        $(".location-container").find(".pop").append("Population: " + pop);
        $(".location-container").find(".area").append("Area: " + area + " (Sq Mi)");
}

function getData(j) {
        $.get('data.json', function(data) {
            cityData = data;
            console.log(cityData);
            $(".location-container").empty();

            $(".location-container").append(cityHtml);
            image = cityData.Cities[j].pic;
            name = cityData.Cities[j].name;
            pop = cityData.Cities[j].population;
            area = cityData.Cities[j].area;

            displayCities(name, pop, area, image);
        });
}


$(document).ready(function(){

        if (cityHtml === null){
            $.get('locations.html', function(data){
                cityHtml = data;

            });
        } else {
            console.log("You already have that HTML.");
        }

        $(".header").on('click', "a", function (){
            $(".location-container").parent().removeClass("hidden");
            var val = $(this).data("id");
            console.log("Value of val: " + val);
            getData(val);
        });


        $(".location-container").on('click', function(){
            $(this).parent().toggleClass("hidden");
        });
});