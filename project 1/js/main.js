import StorageAPI from "../js/storage.js"
import NoteViews from "../js/noteView.js"



const app = document.getElementById('app');
const view = new NoteViews(app, {
    noteAdd() {
        console.log('note has been selected');
    }
});


console.log(StorageAPI.getAllNotes());