const todolist =JSON.parse(localStorage.getItem('todolist'))|| [{name:'Shopping For Birthday',
dueDate:'2023-10-03'}];

displaytodolist();

document.querySelector('.js-add-button').addEventListener('click',()=>{
  addtodo();
})
function displaytodolist(){
  let todolisthtml ='';
 /* for(let i = 0;i<todolist.length;i++){
    const todo = todolist[i];
    const name = todo.name;
    const dueDate = todo.dueDate;
    console.log(dueDate);
    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button onclick="
      todolist.splice(${i},1);
      displaytodolist();
      saveToStorage();
    " class="delete">Delete</button>` ; //generating html
    todolisthtml+=html;
  }*/
  todolist.forEach((todo,i)=>{
   
    const name = todo.name;
    const dueDate = todo.dueDate;
    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button
      saveToStorage();
    " class="delete js-delete-todo-button">Delete</button>` ; //generating html
    todolisthtml+=html;
  });

  document.querySelector('.js-div').innerHTML = todolisthtml;
  
  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todolist.splice(index, 1);
      displaytodolist();
    });
  });

}


function addtodo(){
  const inputElement =document.querySelector('.js-input');
  const name = inputElement.value;
  const dateElement = document.querySelector('.js-date-input');
  const dueDate = dateElement.value;
  todolist.push({
    name: name,
    dueDate:dueDate
  })

  inputElement.value='';
  displaytodolist();
  saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('todolist',JSON.stringify(todolist));
}