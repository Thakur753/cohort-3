const inp = document.querySelector("input");
const add = document.querySelector("#add");
const todoList = document.querySelector(".todo-list");

add.addEventListener('click', () => {
      const value = inp.value;
      if(value.trim () === "") return;
      todoList.innerHTML += `<div class="list">
                        <h3>${value}</h3>

                        <div>
                              <button class="btn  edit">Edit</button>
                              <button class="btn  del">Delete</button>
                        </div>

                  </div>`
      
      inp.value = "";
})