// excercise 1

var entry = prompt ("Enter a Number!");
var total = 0;

for (var x = 0; entry >= x; x++) {
  total += x;
}

console.log("The Total Is " + total)


// excercise 2 - works
let prize = " ";

if (prompt("Do you want to play?") === "yes") {
  do {
    prize += " " + prompt("Enter a word.");
  } while (prompt("Do you want to play again?") === "yes");
}
console.log(prize);

// excercise 3 does not work
let exclamation = " ";
let name = prompt("What is your name?");
let question = "Would you like to print your name?";

while (prompt(question) === "yes") {
    console.log("Hi. My name is " +name + exclamation);
    exclamation += "!";
    question = "Would you like to print this again?";

}



// excersize 4 - works!
let timeofday = prompt("What time of day is it?");

if (timeofday == "morning") {
  console.log("Since it's morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (timeofday == "noon") {
  console.log("Since it's noon, you should be eating lunch. We suggest a salad.");
} else if (timeofday == "evening") {
  console.log("Since it's evening, you should be eating dinner. We suggest chicken and rice.");
} else {
  console.log("Please enter morning, noon, or evening next time!");
}



