const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click",() =>{
    const bookChapter = input.value;
    input.value = "";

    const listBookChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listBookChapter.appendChild(listText);
    listText.textContent = bookChapter;
    listBookChapter.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listBookChapter);

    listBtn.addEventListener('click', ()=> {
        list.removeChild(listBookChapter);
    });

    input.focus();
}
)