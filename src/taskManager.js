import TaskUI from "./taskUI.js";

export default class TaskManager {
  constructor(app) {
    this.app = app;
  }

  //Add a new task
  addTask() {
    console.log("Add task...");
    //Create a new list item with the text from #new-task:
    this.taskUI = new TaskUI(this, this.app.taskInput.value);
    this.listItem = this.taskUI.listItem;
    //Append listItem to incompleteTasksHolder
    this.app.incompleteTasksHolder.appendChild(this.listItem);
    const taskCompleted = (evt) => {
      this.taskCompleted(evt);
    };
    this.app.bindTaskEvents(this.listItem, taskCompleted);
    this.app.taskInput.value = "";
  }

  //Edit an existing task
  editTask(evt) {
    console.log("Edit task...");

    this.listItem = evt.target.parentNode;

    this.editInput = this.listItem.querySelector("input[type=text");
    this.label = this.listItem.querySelector("label");

    this.containsClass = this.listItem.classList.contains("editMode");

    //if the class of the parent is .editMode
    if (this.containsClass) {
      //Switch from .editMode
      //label text become the input's value
      this.label.innerText = this.editInput.value;
    } else {
      //Switch to .editMode
      //input value becomes the label's text
      this.editInput.value = this.label.innerText;
    }

    //Toggle .editMode on the list item
    this.listItem.classList.toggle("editMode");
  }

  deleteTask(evt) {
    console.log("Delete task...");
    this.listItem = evt.target.parentNode;
    this.ul = this.listItem.parentNode;

    //Remove the parent list item from the ul
    this.ul.removeChild(this.listItem);
  }

  //Mark a task as complete
  taskCompleted(evt) {
    console.log("Task complete...");
    //Append the task list item to the #completed-tasks
    this.listItem = evt.target.parentNode;
    this.app.completedTasksHolder.appendChild(this.listItem);
    const taskIncomplete = (evt) => {
      this.taskIncomplete(evt);
    };
    this.app.bindTaskEvents(this.listItem, taskIncomplete);
  }

  //Mark a task as incomplete
  taskIncomplete(evt) {
    console.log("Task incomplete...");
    //Append the task list item to the #incomplete-tasks
    this.listItem = evt.target.parentNode;
    this.app.incompleteTasksHolder.appendChild(this.listItem);
    const taskCompleted = (evt) => {
      this.taskCompleted(evt);
    };
    this.app.bindTaskEvents(this.listItem, taskCompleted);
  }
}
