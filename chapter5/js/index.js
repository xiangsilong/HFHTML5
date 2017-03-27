window.onload = showData;

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
}
