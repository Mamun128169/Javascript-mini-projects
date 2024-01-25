const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("#create-btn");
let notes = document.querySelectorAll(".input-box");

const updateStorage = () => {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

(function() {
    const storedNotes = localStorage.getItem("notes")
    notesContainer.innerHTML = storedNotes;
})();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    // inputBox.className = "input-box";
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    // img.src = "./images/delete.png";
    img.setAttribute("src", "./images/delete.png");
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        console.log(notes);
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage();
            }
        })
    }
})