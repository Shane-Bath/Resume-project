
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom : 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245},
        { lat: 40.754932, lng: - 73.984016},
        {lat: 53.33551051527744, lng: -6.228419745361059},
        {lat: 53.329257323057064, lng: -6.228376830001884},
        {lat: 53.34504230651522, lng: -6.254383528539559},
        {lat: 51.48736077058758, lng: -0.12441050054361082},
        {lat:51.5024700310991, lng: -0.14170538382016282},
    ];

    var markers = locations.map(function(locations, i){
        return new google.maps.Marker({
            position: locations,
            label: labels[i % labels.length]
        });
    });

    var markercluster = new MarkerClusterer(map, markers, 
    {imagePath: `https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m` });
}



    