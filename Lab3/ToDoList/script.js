let tasks = [];

let form = document.getElementById("form");

form.addEventListener('submit', e => { 
    e.preventDefault(); 
    let taskInput = document.getElementById('task').value.trim(); 
    if (taskInput !== '') {
        let task = createTask(taskInput, false);
        addTask(task, tasks);
        renderTasks(tasks);
        document.getElementById('task').value = '';
    } else {
        alert('Error: The Value is Empty');
    }
});

function createTask(name, finished){
    let task = {
        name: name, 
        finished: finished 
    };
    return task;
}

function addTask(task, tasks){
    tasks.push(task); 
}

function renderTasks(tasks){
    let taskList = document.querySelector('.task-container');
    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        let newTask = document.createElement('li');
        newTask.textContent = task.name;

       
        let mark = document.createElement('input');
        mark.type = "checkbox";
        mark.className = 'mark';
        newTask.appendChild(mark);

        
        let deletionButton = document.createElement('button'); 
        let img = document.createElement('img'); 

        deletionButton.className = 'delete-btn';
        img.width = 30;
        img.height = 30;
        img.src = "https://cdn-icons-png.flaticon.com/512/5676/5676146.png"; 
        deletionButton.appendChild(img);

        newTask.appendChild(deletionButton);

        mark.addEventListener('change', () => {
            if (mark.checked) {
                newTask.style.textDecoration = "line-through";
            } else {
                newTask.style.textDecoration = "none";
            }
        });

        deletionButton.addEventListener('click', () =>{
            removeTask(tasks, task.name);
            renderTasks(tasks);
        })

        taskList.appendChild(newTask);
    });
}

function removeTask(tasks, name){
    if(!name || name === '') {
        return; 
    }
    let index = tasks.findIndex(task => task.name === name);
    if(index !== -1) { 
        tasks.splice(index, 1); 
        renderTasks(tasks); 
    }
}
