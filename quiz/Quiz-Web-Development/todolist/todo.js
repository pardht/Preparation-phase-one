const parentList = document.getElementById('listParent');
const inputTodo = document.getElementById('inpTodo');
const addBtn = document.getElementById('addBtn');


function add() {
    if (inputTodo.value.trim() === "") {
        alert("tasknya gaboleh kosong!");
        return;
    }

    const bungkus = document.createElement('div'); 
    const todo = document.createElement('li'); todo.textContent = inputTodo.value.trim(); 
    const hapusBtn = document.createElement('button'); hapusBtn.textContent = 'hapus'; hapusBtn.className = 'hapusBtn';

    parentList.appendChild(bungkus); bungkus.appendChild(todo); 

    bungkus.appendChild(hapusBtn)
    document.getElementById("inpTodo").value = "";

    bungkus.addEventListener('click', function() {
        todo.classList.toggle('completed')
    })

    hapusBtn.addEventListener('click', function() {
        parentList.removeChild(bungkus);
      });
}

inputTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
  }
});


addBtn.addEventListener('click', add)