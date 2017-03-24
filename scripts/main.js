
var incompletedItemHolder = document.getElementById("incompleted-items");
var completedItemHolder = document.getElementById("completed-items");
var addButton = document.getElementsByTagName("button")[0];
var userInput = document.getElementById("newText");
var incompleteCounter = 0;
var completeCounter = 0;


function createListItem(taskString) {

	var listItem = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	
	label.innerHTML = taskString;
	
	checkbox.type = "checkbox";
	checkbox.value = "value";
	checkbox.id = "incompleteItem";

	listItem.appendChild(label);
	listItem.appendChild(checkbox);

	listItem.classList.add("listItems");
	
	return listItem;
}

function addListItem() {

	console.log("Adding task...");

	var listItem = createListItem(userInput.value);

	incompletedItemHolder.appendChild(listItem);

	userInput.value = "";	

	incompleteCounter += 1;

	if ( incompleteCounter > 1 ) {
		deleteCounter();
		updateCounter();
	} else {
	updateCounter();
	}
	
	startHerUp();

}


addButton.addEventListener("click", addListItem);


function startHerUp() {	
	var taskList = document.querySelectorAll("li");
	for ( var i = 0; i < taskList.length; i++ ) {
		taskList[i].addEventListener("click", checkboxVerification);
	}
}


function checkboxVerification() {

	var listItem = document.getElementById("incompleteItem");

		if ( listItem.checked ) {
			deleteListItem(listItem);
			addCompletedItem(listItem);
		} else {
			console.log("No items are checked...");
		}

		
}

function deleteListItem (listItem) {
	var listItem = listItem.parentNode;
	listItem.remove();
	console.log("Deleting task...");
}

function addCompletedItem(listItem) {
	console.log("Adding completed task...");
	var listItem = listItem.parentNode;
	completedItemHolder.appendChild(listItem);
	completeCounter += 1;
	deleteCounter();
	updateCounter();
}

function deleteCounter() {
	document.getElementById("counterId").remove();
}

function updateCounter(){

	var counterText = completeCounter + " / " + incompleteCounter + " completed"; 

	var iElement = document.createElement("p");

	iElement.id = "counterId";
	iElement.innerHTML = counterText;
	iElement.classList.add("counterElement");

	document.getElementById("counter").appendChild(iElement);

}


