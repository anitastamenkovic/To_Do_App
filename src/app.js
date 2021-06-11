import TaskManager from "./taskManager.js";

export default class App {
  constructor() {
    console.log("App.constructor");

    this.init();

    this.taskManager = new TaskManager(this);

    this.setButtonEvents();
    this.checkTasks();
  }

  init() {
    this.taskInput = document.getElementById("new-task"); //new-task
    this.addButton = document.getElementsByTagName("button")[0]; //first button
    this.incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
    this.completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
  }

  setButtonEvents() {
    const addTask = (evt) => {
      this.taskManager.addTask(evt);
    };
    const ajaxRequest = () => {
      console.log("AJAX request");
    };
    this.addButton.addEventListener("click", addTask);
    this.addButton.addEventListener("click", ajaxRequest);
  }

  bindTaskEvents(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select taskListItem's children
    this.checkBox = taskListItem.querySelector("input[type=checkbox]");
    this.editButton = taskListItem.querySelector("button.edit");
    this.deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask to edit button
    const editTask = (evt) => {
      this.taskManager.editTask(evt);
    };
    this.editButton.onclick = editTask;

    //bind deleteTask to delete button
    const deleteTask = (evt) => {
      this.taskManager.deleteTask(evt);
    };
    this.deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    this.checkBox.onchange = checkBoxEventHandler;
  }

  checkTasks() {
    const taskCompleted = (evt) => {
      this.taskManager.taskCompleted(evt);
    };
    //cycle over incompleteTasksHolder ul list items
    for (let i = 0; i < this.incompleteTasksHolder.children.length; i++) {
      //bind events to list item's children (taskCompleted)
      this.bindTaskEvents(
        this.incompleteTasksHolder.children[i],
        taskCompleted
      );
    }

    const taskIncomplete = (evt) => {
      this.taskManager.taskIncomplete(evt);
    };

    //cycle over completedTasksHolder ul list items
    for (let i = 0; i < this.completedTasksHolder.children.length; i++) {
      //bind events to list item's children (taskIncomplete)
      this.bindTaskEvents(
        this.completedTasksHolder.children[i],
        taskIncomplete
      );
    }
  }
}
