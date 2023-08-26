import "./style.css";
import Icon from "/icon.png";
import { addTask } from "./addTask";

document.querySelector("#app").innerHTML = `
<div class="todo-app">
  <h2>
    To-Do List
    <img src=${Icon} class="icon" alt="icon" />
  </h2>
  <div class="row">
    <input type="text" id="input-box" placeholder="Add your task here...">
    <button id="button" type="button">Add</button>
  </div>
  <ul id="list-container">
  </ul>
</div>
`;

addTask();
