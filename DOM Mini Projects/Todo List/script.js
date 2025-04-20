let addBtn = document.getElementById("addBtn");
let itemInput = document.getElementById("itemInput");
let itemList = document.getElementById("itemList");

addBtn.addEventListener("click", (e) => {
  let itemText = itemInput.value.trim();

  if (itemText !== "") {
    // Create li element
    let li = document.createElement("li");
    li.textContent = itemText;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";

    // Delete functionality
    delBtn.addEventListener("click", () => {
      itemList.removeChild(li);
    });

    li.appendChild(delBtn); // add delete button to li
    itemList.appendChild(li); // add li to ul

    itemInput.value = ""; // clear input
  }
});
