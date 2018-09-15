// i already hate this codebase
function determineLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            long = positions.coords.longitude;
            return [lat, long];
        });
    }
    else {
        alert("Geolocation not supported");
        return;
    }
}

function loadMap(map){
    lat = determineLocation()[0];
    long = determineLocation()[1];
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: long},
        zoom: 8
      });
}
