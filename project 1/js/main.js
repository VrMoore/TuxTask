import StorageAPI from "../js/storage.js"
import NoteViews from "../js/noteView.js"



const app = document.getElementById('app');
const view = new NoteViews(app, {
    noteAdd() {
        console.log("Let's add new notes");
    },
    noteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    }
});


console.log(StorageAPI.getAllNotes());