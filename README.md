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