const addForm = document.querySelector(".add");
const list = document.querySelector(".todos")

const generateTemplate = todo => {
     const html =`
     <li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${todo}</span>
     <i class="far fa-trash-alt delete"></i>
     </li>
     `;
     list.innerHTML += html;

}



addForm.addEventListener("submit", e =>{

     e.preventDefault();                                                    // very important to prevent default value!!!
    const todo =  addForm.add.value.trim();                                 // the trimp method removes the whie values
   if(todo.length){
        generateTemplate(todo);
        addForm.reset();
   }
  
})