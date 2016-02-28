/**
 * Created by vincebloise on 2/27/16.
 */
function compareNumbers(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

var sortedArray = [3, 1, 4, 1, 5, 9].sort(compareNumbers);

console.log("sorted this array [3, 1, 4, 1, 5, 9] as: " + sortedArray);

var names = ["Vince", "Marin", "Bailey", "The Dude", "Walter"];
var upper = names.map(function(name) {
  return name.toUpperCase();
});

console.log("transformed these names %s to these names %s", names, upper);

function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name);
  },
  toString: function() {
    return "[Person " + this.name + "]";
  }
};

var person1 = new Person("The Dude");
var person2 = new Person("Walter");

console.log(person1.toString());
console.log(person2.toString());
