export default class TaskUI {
  constructor(taskManager, taskString) {
    this.taskManager = taskManager;
    this.taskString = taskString;

    this.createUI();
  }

  createUI() {
    this.createCheckBox();
    this.createEditInput();
    this.createEditButton();
    this.creteDeleteButton();
    this.createLabel();
    this.createListItem();
  }

  createListItem() {
    //Create List Item
    this.listItem = document.createElement("li");
    //Each element needs appending
    this.listItem.appendChild(this.checkBox);
    this.listItem.appendChild(this.label);
    this.listItem.appendChild(this.editInput);
    this.listItem.appendChild(this.editButton);
    this.listItem.appendChild(this.deleteButton);
  }

  createCheckBox() {
    //input (checkbox)
    this.checkBox = document.createElement("input"); // checkbox
    this.checkBox.type = "checkbox";
  }

  createEditInput() {
    //input (text)
    this.editInput = document.createElement("input"); // text
    this.editInput.type = "text";
  }

  createEditButton() {
    //button.edit
    this.editButton = document.createElement("button");
    this.editButton.innerText = "Edit";
    this.editButton.className = "edit";
  }

  creteDeleteButton() {
    //button.delete
    this.deleteButton = document.createElement("button");
    this.deleteButton.innerText = "Delete";
    this.deleteButton.className = "delete";
  }

  createLabel() {
    //label
    this.label = document.createElement("label");
    this.label.innerText = this.taskString;
  }
}
