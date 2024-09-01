//Array
let todoes = [];

//Find elements in HTML
const card = document.querySelector(".todo-list");
const addButton = card.querySelector("#add");
const listDisplay = card.querySelector("ul");
//Added as let since it needs to change later
let inputField = card.querySelector("input");

function addTodo(title) {
  //Error if txt is too short
  if (title.length <= 2) {
    console.log("Too short to proceed");
    return;
  } else {
    //Create elements
    const label = document.createElement("label");
    const p = document.createElement("p");
    const del = document.createElement("button");
    const newList = document.createElement("li");
    //Create checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    //Creates the new object
    const newTodo = {
      title: title,
      isComplete: false,
    };

    //Add text to elements
    p.textContent = "Task Complete:";
    del.textContent = "Delete task";
    newList.textContent = newTodo.title;

    //Add classname
    label.classList = "task";
    //Add ID
    newList.id = `Task${todoes.length}`;
    del.id = "del";

    //Add p inside label
    label.appendChild(p);
    //Add checkbox under p inside label
    label.appendChild(checkbox);
    //Add label inside list
    newList.appendChild(label);
    //Add button under label inside list
    newList.appendChild(del);

    //Add to the end of the array
    todoes.push(newTodo);
    console.log(todoes);

    //Delete function
    function deleteTask() {
      newList.remove();
    }

    del.addEventListener("click", deleteTask);

    return newList;
  }
}

function handleAddTodo() {
  //Les av input verdiene
  const inputValue = inputField.value;

  //Capitalize first letter
  const UcInputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

  //Legg til i listen
  const newList = addTodo(UcInputValue);

  //Legg til i HTML dokumentet
  listDisplay.append(newList);

  //Remove text from inputfield
  inputField.value = "";
}

addButton.addEventListener("click", handleAddTodo);
