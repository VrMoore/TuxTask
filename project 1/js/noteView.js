export default class NotesView {
    constructor(root, { noteSelect, noteAdd, noteEdit, noteDelete} = {}) {
        this.root = root;
        this.noteSelect = noteSelect;
        this.noteAdd = noteAdd;
        this.noteEdit = noteEdit;
        this.noteDelete = noteDelete;
        this.root.innerHTML = `
            <aside>
                <div class="notes_list">
                    <h3>My Notes</h3>
                    <button class="notes_add" type="button">
                        <i id="add_btn" class="fa-solid fa-plus"></i>
                        <p>Add Notes</p>
                    </button>
                </div>
            </aside>
            <article>
                <h1>My Notes</h1>
                <section>
                    <input type="text" id="notes_title" placeholder="New Title"></input>
                    <textarea class="notes_body" placeholder="add text...."></textarea>
                </section>
            </article>
        `;

        const btnAddNote = this.root.querySelector("notes_add");
        const titleNote = this.root.querySelector("notes_title");
        const bodyNotes = this.root.querySelector("notes_body");

        btnAddNote.addEventListener("click", () => {
            this.noteAdd();
        }); 
    };
};