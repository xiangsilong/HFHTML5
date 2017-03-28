window.onload = showData;
//ymaps.ready(showData);
   var myMap;
function showData() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation API does not support');
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  document.getElementById("location").innerHTML = "You are at latitude: " + latitude + " and longitude: " + longitude;
  showMap(position.coords);
}

function showMap(coords) {
  myMap = new ymaps.Map("map", {
            center: [coords.latitude, coords.longitude],
            zoom: 15
        });
  placeMark(coords);
}

function placeMark(coords) {
  var placeMark = new ymaps.Placemark([coords.latitude, coords.longitude], {hintContent: 'It is my place', balloonContent:'Home'});
  myMap.geoObjects.add(placeMark);
}
