$(document).ready(function() {
  var number = 1;
  $(".menu1").click(function() {
    $(".menu" + number).removeClass("current");
    $(".menu1").addClass("current");
    $(".page" + number).slideUp();
    $(".page1").slideDown();

    number = 1;
  });

  $(".menu2").click(function() {
    $(".menu" + number).removeClass("current");
    $(".menu2").addClass("current");
    $(".page" + number).slideUp();
    $(".page2").slideDown();

    number = 2;
  });

  
  $(".menu4").click(function(){
    window.open("http://www.almjones.com/AlanJones_Resume.pdf");
  });
  
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

});
