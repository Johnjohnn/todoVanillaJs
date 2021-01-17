const addForm = document.querySelector(".add");
const list = document.querySelector(".todos")
const search = document.querySelector(".search input")

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


//DELETE TODOS 
list.addEventListener("click", e => {
 if(e.target.classList.contains("delete")){
      e.target.parentElement.remove()
 }
})
const filterTodos = (term)=> {
     Array.from(list.children)
     .filter((todo) => !todo.textContent.includes(term))
     .forEach((todo)=> todo.classList.add("filtered"));
          
     Array.from(list.children)
     .filter((todo) => todo.textContent.includes(term))
     .forEach((todo)=> todo.classList.remove("filtered"));
             
          
          


}



// KEYUP EVENT 
search.addEventListener("keyup", ()=>{
     const term = search.value.trim();
     filterTodos(term);
})