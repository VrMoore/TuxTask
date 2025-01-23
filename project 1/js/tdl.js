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

const addBtn = document.getElementById('add_btn');
const inputBox = document.getElementById('input_task');

console.log(inputBox);
console.log(addBtn);

function addTask() {
    
    addBtn.addEventListener('click', () => {
        let li = document.createElement("li");
        li.classList.add('items_list');
        li.innerHMTL = `
            <input type="checkbox" id="check">
            <p>${inputBox}</p>
            <i id="cross" class="fa-solid fa-xmark"></i>
        `;

        listItems.appendChild(li);
    })
}

addTask();