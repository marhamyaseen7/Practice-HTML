let todoList = [];

function addingTask(){
    let inputField = document.getElementById("task-input");
    let newTask = inputField.value;

    if (newTask === " "){
        alert("Please Enter a Task!!");
        return;

    }

    todoList.push(newTask);
    inputField.value = "";
    showList()

}

function showList(){
        let deliveryBox = document.getElementById("List-container")
        let finalHTML = "";
        for (let i = 0; i < todoList.length; i++){
            finalHTML = finalHTML + `
            <p>${todoList[i]}
            <button onclick ="editTask(${i})">Edit</button>
           <button onclick="deleteTask(${i})" style=" background-color:red";>Delete</button>
          
           </p>`    

         }
         deliveryBox.innerHTML = finalHTML;
}

function deleteTask(index){
    todoList.splice (index, 1);
    showList()
}

function editTask(index){
    let updatedTask = promt("Edit our Task!",todolist[index]);
    if(updatedTask !== null && updatedTask !== ""){
        todoList[index] = updatedTask;
        showList();
    }

}