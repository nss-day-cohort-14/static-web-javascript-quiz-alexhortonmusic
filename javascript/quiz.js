//---------HTML ELEMENTS-----//
//----------TO CAPTURE-------//

//Get input from user for height of tree
var heightInput = document.getElementById('heightInput');
//Get input from user for character to build tree i.e. "*"
var charInput = document.getElementById('charInput');
//"Submit" button for user to click to build tree
var growBtn = document.getElementById('growBtn')



//---------Functions---//
function tree (treeBuild) {

}

function submitInput () {
	if (heightInput.value === "" || charInput.value === "") {
		alert("You must type a height (number) and a character to build your tree!");
	} 
	else {
		//tree object to store values from user input
		var christmas = {
		height: heightInput.value,
		char: charInput.value
		}
	}
}





//---------Event Listeners----//
heightInput.addEventListener('keypress', pressEnter);
charInput.addEventListener('keypress', pressEnter);
growBtn.addEventListener('click', submitInput);


// var height = document.getElementById('height').value;
// height = parseInt(height);

// var char = document.getElementById('char').value;

var heightChar = {howTall: height, charUsed: char};
function tree() {
	
	for (var branch in heightChar) {
		 sum += branch;
		
		console.log(branch);
	}
}

var forest = tree();


// width = (height * 2) - 1

// var grow = document.getElementById('growBtn');

// grow.addEventListener("click", function () {
// 		for (var i = 0; i < height; i++) {
// 		branches += [i];
// 		console.log("branches", branches);
// 	}
// })



// function tree (singleObject) {
	// var branches = "";
// 	for (var i = 0; i < height; i++) {
// 		branches += [i];
// 		console.log("branches", branches);
// 	}
// }

