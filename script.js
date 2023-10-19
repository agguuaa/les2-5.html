function displayWelcomeMessage() {
  var name = prompt("What's your name?");
  var yearOfBirth = prompt("What year were you born?");
  var currentYear = new Date().getFullYear();
  var age = currentYear - yearOfBirth;

  var isBornIn1980 = yearOfBirth == 1980;

  console.log("The date of birth is 1980: " + isBornIn1980);

  var welcomeMessage = "Hello " + name + "! You are " + age + " years old.";

  var welcomeElement = document.createElement("h1");
  var textNode = document.createTextNode(welcomeMessage);
  welcomeElement.appendChild(textNode);

  document.body.appendChild(welcomeElement);
}

displayWelcomeMessage();
