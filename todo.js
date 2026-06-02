let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
renderTasks();
}

function addTask(){
const input = document.getElementById("taskInput");

if(input.value==="") return;

tasks.push({
text: input.value,
completed:false
});

input.value="";
saveTasks();
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
}

function toggleTask(index){
tasks[index].completed=!tasks[index].completed;
saveTasks();
}

function renderTasks(filter="all"){
const list=document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

if(filter==="active" && task.completed) return;
if(filter==="completed" && !task.completed) return;

const li=document.createElement("li");

li.innerHTML=`
<input type="checkbox"
${task.completed ? "checked" : ""}
onclick="toggleTask(${index})">

${task.text}

<button onclick="deleteTask(${index})">
Delete
</button>
`;

list.appendChild(li);
});
}

function filterTasks(type){
renderTasks(type);
}

renderTasks();