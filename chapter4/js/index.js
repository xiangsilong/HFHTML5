window.onload = initAndFill;

function initAndFill() {
  var john = new Dog("John", 4, 3);
  var ul = document.getElementById("dogs");
  var li = document.createElement("li");
  li.innerHTML = john.bark();
  ul.appendChild(li);
}

function Dog(name, weight, age) {
  this.name = name;
  this.weight = weight;
  this.age = age;

  this.bark = function() {
    return this.name + ":woof!";
  }
}
