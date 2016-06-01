//---------HTML ELEMENTS-----//
//----------TO CAPTURE-------//

// Get input from user for height of tree
var heightInput = document.getElementById('heightInput');
// Get input from user for character to build tree i.e. "*"
var charInput = document.getElementById('charInput');
// "Submit" button for user to click to build tree
var growBtn = document.getElementById('growBtn')



var charString = "";
var numberChars;


// Function to build that tree
function tree (treeBuild) {
	numberChars = 1;
	var spacesForTree = treeBuild.height - 1;
		// width of tree "box" = (height * 2) - 1
	for (var i = 0; i < treeBuild.height; i++) {
		addBlanks(spacesForTree);
		addChars(treeBuild.char);
		printTree();
		spacesForTree--;
	}
}

// Function to get input from user, including alert if info not entered
function submitInput () {
	if (heightInput.value === "" || charInput.value === "") {
		alert("You must type a height (number) and a character to build your tree!");
	} 
	else {
		//tree object to store values from user input
		var christmas = {
		height: heightInput.value,
		char: charInput.value
		};
		tree(christmas);
	}
}

// To offset string with blanks
function addBlanks(x) {
  for (; x > 0; x--) {
    charString += " ";
  }
}

// To offset string with characters
function addChars(chosenChar) {
  for (var i = 1; i <= numberChars; i++) {
    charString += chosenChar;
  }
  numberChars += 2;
}

// Print tree
function printTree() {
  console.log(charString);
  charString = "";
}

//---------Event Listeners----//

// Function to determine 'enter' keypress
function pressEnter (event) {
  var keyPressed = event.keyCode || event.which;
    if (keyPressed == 13) {
     	submitInput();
    }
};

heightInput.addEventListener('keypress', pressEnter);
charInput.addEventListener('keypress', pressEnter);
growBtn.addEventListener('click', submitInput);