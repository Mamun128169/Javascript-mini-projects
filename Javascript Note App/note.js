const notesContainer = document.querySelector(".notes-container");
const createNoteBtn = document.querySelector('#create-btn');
let notes = document.querySelectorAll('.input-box');

const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

(function () {
    if (localStorage.getItem('notes') === null) return;
    let saveNotes = localStorage.getItem("notes");
    notesContainer.innerHTML = saveNotes;
})();

createNoteBtn.addEventListener("click", () => {
    const noteBox = document.createElement("p");
    const img = document.createElement("img");
    noteBox.className = "input-box";
    noteBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(noteBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage();
            }
        }) 
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})

