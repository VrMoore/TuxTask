export default class NotesView {
    constructor(root, { noteSelect, noteAdd, noteEdit, noteDelete} = {}) {
        this.root = root;
        this.noteSelect = noteSelect;
        this.noteAdd = noteAdd;
        this.noteEdit = noteEdit;
        this.noteDelete = noteDelete;
        this.root.innerHTML = `
            <aside>
                <h3>My Notes</h3>
                <button class="notes__add" type="button">
                    <i id="add_btn" class="fa-solid fa-plus"></i>
                    <p>Add Notes</p>
                </button>
                <div class="notes_list"></div>
            </aside>
            <article>
                <input type="text" id="notes__title" placeholder="New Title" spellcheck="false"></input>
                <section>
                    <textarea class="notes__body" placeholder="add text...."  spellcheck="false"></textarea>
                </section>
            </article>
        `;

        const btnAddNote = this.root.querySelector(".notes__add");
        const titleNotes = this.root.querySelector(".notes__title");
        const bodyNotes = this.root.querySelector(".notes__body");

        btnAddNote.addEventListener("click", () => {
            this.noteAdd();
        }); 

        if (titleNotes && bodyNotes) {
            [titleNotes, bodyNotes].forEach(inputField => {
                inputField.addEventListener("blur", () => {
                    const updatedTitle = titleNotes.value.trim();
                    const updatedBody = bodyNotes.value.trim();
    
                    this.noteEdit(updatedTitle, updatedBody);
                });
            });
        };

        console.log(this._createListItem(200, "Notes 1", "Lorem Ipsum dolor sit amet"))

    };

    _createListItem(id, title, body) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="note_list_items" data-node-id="${id}">
            
                <div class="notes_small_title">${title}</div>
                <div class="notes_small_body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "...." : ""}
                </div>
            
            </div>
        `;
    }

    updateNoteList(notes) {
        const notesList = this.root.querySelector(".notes_list");

        notesList.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItem(note.id, note.title, note.body);

            notesList.insertAdjacentHTML('beforeend', html);
        }

        notesList.querySelectorAll(".note_list_items").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.noteSelect(noteListItem.dataset.noteId);
            });
        });
    }

};