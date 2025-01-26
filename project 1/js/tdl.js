const listItems = document.getElementById('content_list');

function listAction(myList) {
    myList.forEach(item => {
        const crossX = item.querySelector("#cross");
        
        item.addEventListener('mouseenter', () => {
            crossX.style.color = "white";
            crossX.style.transform = 'rotate(90deg)';
            crossX.style.transition = '.5s all ease';
        });
    
        item.addEventListener('mouseleave', () => {
            crossX.style.color = "";
            crossX.style.transform = '';
            crossX.style.transition = '.5s all ease';
        });
    
    });
        
}

const addBtn = document.getElementById('input_button');
const inputBox = document.getElementById('input_task');

function addTask() {
    
    addBtn.addEventListener('click', () => {
        let li = document.createElement("li");
        li.classList.add('lists_items');
        
        createListItem(inputBox, li);

        listItems.appendChild(li);
    });

    inputBox.value = "";
    saveToLocal();

}

function createListItem(inputBox, li) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = 'check';
    li.appendChild(checkbox);

    const paragraph = document.createElement("p");
    paragraph.classList.add('desc');
    paragraph.textContent = inputBox.value;
    li.appendChild(paragraph);
    
    const cross = document.createElement("i");
    cross.classList.add('fa-solid','fa-xmark');
    cross.id = 'cross';
    li.appendChild(cross);

    cross.addEventListener('click', () => {
        li.remove()
        saveToLocal();
    })

    li.addEventListener('click', (e) => {
        if (e.target != cross) {
            checkbox.checked = !checkbox.checked;
        }
        saveToLocal();
    })

    const listItemsElement = Array.from(listItems.children);
    listAction(listItemsElement);

};

function saveToLocal() {
    let localData = [];
    const listItemsContent = document.querySelectorAll(".items_list")
    
    listItemsContent.forEach(item => {
        const checkbox = item.querySelector('#check');
        const desc = item.querySelector('.desc');

        localData.push({
            description : desc,
            checked : checkbox.checked
        })
    })
    
    localStorage.setItem('taskListData', JSON.stringify(localData));

}

function showTask() {
    listItems.innerHTML = localStorage.getItem('taskListData')
}

addTask();
// saveToLocal();


// const saved = JSON.parse(localStorage.getItem('taskListData'))
// console.log(saved, 'saved from local')