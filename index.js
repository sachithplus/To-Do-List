document.querySelector('#push').onclick = function (){

let taskInput = document.querySelector("#newtask input");


if(taskInput.value.length === 0)
{
alert("Please Enter a Task");

} else{
let taskList = document.querySelector("#task");
let newTask = document.createElement('div');
newTask.classList.add("task");

newTask.innerHTML = `
<span>${taskInput.value}</span>
<button class="delete"> <i class="fa fa-trash" aria-hidden="true"></i></button>

`;
taskList.appendChild(newTask);
taskInput.value = "";

newTask.querySelector("span").onclick = function (){
this.classList.toggle("completed");

};


newTask.querySelector(".delete").onclick = function (){
newTask.remove();

};

}
};