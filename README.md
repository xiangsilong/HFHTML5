# Chapter 3. Working with DOM and WebStorage API
When page load java script build DOM (document object model). It includes all components at the page such as blocks(```<div>```), paragraph(```<p>```) and other tags.
Object document in your script represent DOM of your page. For access to the element needs call next function from document object ```getElementById("id")```. It return elemen with given id. Also you may need add to the your element some data or child nodes. It may do by the next way:
```
var ul = document.getElementById('playlist');
var li = document.createElement('li');
li.innerHTML = 'Your text here';
ul.appendChild(li);
```
For get data from input element use value property of element:
```
var city = document.getElementById('cities').value;
```

# Chapter 4. Object in the JS
In your java script your may create your own object. First you need create a function - constructor for your objects. This reference point to the current object. For example:
```
function Dog(name, weight, age) {
	this.name = name;
 	this.weight = weight;
 	this.age = age;
	this.bark = function() {
 	return 'Woof!';
 }
}
```
By conventions constructor name start with big letter. For create a new object:
```
var myDog = new Dog('John', 3.6, 3);
//now your can access to the property of this object or may call method from this
myDog.bark();
```
# Chapter 5. Geolocation API
At the HTML5 exist Geolocation API, it provide geolocation function. Before using this API your should check that client support it. Before API start works browser needs user permission to the determine position. When your code have using Geolocation API browser show to the user popup for decide - show or hide positon. This check made by next code:
```
if (navigator.geolocation) {
	//work with client position.
}
```
For get more detailed information your should call method getCurrentPosition from navigator.geolocation and give it callback function which handle data.
```
function calculatePosition() {
	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    	alert('Your browser not support geolocation');
    }
}

function showPosition(position) {
	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude + "_" + longitude);
}
```

Adding map to the page. At the June of 2016 Google turn of access to Google Maps API without API key. Instead Google Maps API I use Yandex Maps API, it is similar API.
How to use it:
1. Add API reference at the head tag as script.
2. Create a container for map with width and height
3. Create a map object, for made it use constructor which accept id name of container and map options.

In your html file.
```
<script src="link to the API"></script>
```

In your js file.
```
function showMap(coords) {
	var map = new ymaps.Map("map",
    					{center:[coords.latitude, coords.longitude], zoom: 11});
}
```
If you want add placemark on the cart use next code. Coords specify point on the map which will marked, hintContent describe hint for user and balloonContent showing when user click on the marker.
```
function addPlacemark(coords, hintContent, balloonContent) {
	var placemark = new ymaps.Placemark([coords.latitude, coords.longitude],
    {hintContent: hintContent, balloonContent: balloonContent});
    myMap.geoObjects.add(placemark);
}
```
Also Geolocation API provide method which calls when position of user is changed.
```
var id = navigator.geolocation.watchPosition(showCurrent, error, options);
```
showCurrent - it is callback function, calls when position get, error callback determine what to do if happened some errors. And option, it is provide configuration for accuracy, timeout of location, and maximumAge for position.

And the end of the work with geolocation API, you should clear location store by call next method.
```
navigator.geolocation.clearWatch(id);
```
# Chapter 6. Ajax and JSON
If you develop app in pure JavaScript, not user jQuery or other third party libraries. For request to the server you use `XmlHttpRequest`. But it class have a politic privacy that say us that we do not interact with other resources has different domain from us domain.
For fix this bug people use callback wrapper, is very ugly. I don't know left it at the current version of JS. And for example piece of code to interact with server.
```
window.onload = function() {
 var url = "https://some.api.com/";
 var request = new XMLHttpRequest();
 request.open("GET", url);
 request.onload = function() {
  if(request.status == 200) {
     //at this moment we have access send to us by server
     console.log(request.responseText);
  }
 }
}
```
For communicate between services exist two mechanims - first across JSON, and the second - across XML. At this moment JSON more popular that XML. JSON it is acronym for Java Script Object Notation. Example of JSON:
```
[
  {
    "_id": "58e158ff85b066075b20ac8d",
    "index": 1,
    "guid": "e1d40d10-f07a-416e-a98d-7b32f8fe421a",
    "isActive": false,
    "balance": "$2,045.01",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Hays Hensley",
    "gender": "male",
    "company": "CORECOM",
    "email": "hayshensley@corec"
  }
]
```

For work with JSON in Java Script exist JSON object which provide next method `stringify`, `parse`. How see first convert object into json string, another parse json string and return java script object.
For execution some task at the interval in the JS exist next method.
```
setInterval(300, someUpdate);
```
In come cases when you need to replace some element. You should use next method.
```
var head = document.getElementsByTag("head")[0]; //Get head of the page.
head.replaceChild(newElement, oldElement); //Remove old element and insert new element.
```
# Chapter 7. Canvas
