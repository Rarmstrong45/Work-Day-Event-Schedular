// Text input class = saveMe id = text(9,10,11,12,1,2,3,4,5)
// Save Image class = saveIcon id=save(9,10,11,12,1,2,3,4,5)

// create a function that takes data from text input and push it into an Array by clicking "save button" (

// Save Array to local storage 

// retrieve tasks from local storage

// add function to change color due to time


// Create Function to display time
function displayTime() {
	var today = moment().format('MMMM Do YYYY, h:mm:ss a');
	$('#currentDay').html(today);
	setInterval(displayTime, 1000);
}
displayTime();


// I believe I messed up and put a <text input> rather than text area

// I will come back and redo challenge and re submit.