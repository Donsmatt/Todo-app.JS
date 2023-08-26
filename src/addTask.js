export const addTask = () => {
  const addButton = document.querySelector("#button");
  const inputBox = document.querySelector("#input-box");
  const listContainer = document.querySelector("#list-container");

  addButton.addEventListener("click", () => {
    if (inputBox.value === "") {
      alert("You have to write something!");
    } else {
      let li = document.createElement("li");
      let span = document.createElement("span");

      li.innerHTML = inputBox.value;
      span.innerHTML = "\u00d7";

      li.appendChild(span);
      listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
  });

  listContainer.addEventListener(
    "click",
    (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    },
    false
  );

  const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
  };

  const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
  };

  showTask();
};
