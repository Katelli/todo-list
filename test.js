//----Test file to add a remove by ID function----

//Array
let todoes = [];

//Find elements in HTML
const card = document.querySelector(".todo-list");
const addButton = card.querySelector("#add");
const del = document.querySelector("#del");
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
    newList.textContent = newTodo.title;

    //Add classname
    label.classList = "task";
    //Add ID
    newList.id = inputField.value;

    //Add p inside label
    label.appendChild(p);
    //Add checkbox under p inside label
    label.appendChild(checkbox);
    //Add label inside list
    newList.appendChild(label);

    //Add to the end of the array
    todoes.push(newTodo);
    console.log(todoes);

    return newList;
  }
}

function handleAddTodo() {
  //Read input value
  const inputValue = inputField.value;

  //Capitalize first letter
  const UcInputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

  //Add to list
  const newList = addTodo(UcInputValue);

  //Add to HTML element
  listDisplay.append(newList);

  //Remove text from inputfield
  inputField.value = "";
}

addButton.addEventListener("click", handleAddTodo);

function removeTodoById(id) {
  //Read input value
  const inputValue = inputField.value;

  //Capitalize first letter
  const UcInputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

  //Find li in HTML
  const delList = document.querySelector("li");

  //Remove from HTML element
  delList.remove(`${UcInputValue}`);

  //Remove text from inputfield
  inputField.value = "";
}

del.addEventListener("click", removeTodoById);

/**Add this in form in Index to use this code
 * <input id="del" type="submit" value="Delete Task" />
 */
