var incompletedItemHolder = document.getElementById("incompleted-items");
var completedItemHolder = document.getElementById("completed-items");
var addButton = document.getElementsByTagName("button")[0];
var userInput = document.getElementById("newText");


function createListItem(taskString) {

	var listItem = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	
	label.innerHTML = taskString;
	label.htmlFor = "id";
	
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

	var listItem = document.getElementById("incompleteItem");

	listItem.addEventListener("click", checkboxVerification);

}

addButton.addEventListener("click", addListItem);


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
	console.log("Adding completed item...");
	var listItem = listItem.parentNode;
	listItem.classList.add("completedItemStyle");
	completedItemHolder.appendChild(listItem);
}

