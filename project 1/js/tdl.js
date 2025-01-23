const listItems = document.getElementById('content_list');
const listItemsElement = Array.from(listItems.children);

listItemsElement.forEach(item => {
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

const addBtn = document.getElementById('input_button');
const inputBox = document.getElementById('input_task');

console.log(inputBox);
console.log(addBtn);

function addTask() {
    
    addBtn.addEventListener('click', () => {
        let li = document.createElement("li");
        li.classList.add('lists_items');
        li.createListItem = createListItem(inputBox)

        listItems.appendChild(li);
        console.log(li)
    })
}

function createListItem(inputBox) {
    return `
        <input type="checkbox" id="check">
        <p>${inputBox.value}</p>
        <i id="cross" class="fa-solid fa-xmark"></i>
    `;
};

addTask();