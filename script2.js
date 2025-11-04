function validate(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if(name == "" || email == "") {
        alert("All fields are required!");
        event.preventDefault();
        return false;
    }
    let namepattern = /^[A-Z][A-Za-z0-9]/;
    if(!namepattern.test(name))
    {
        document.getElementById('errorname').innerHTML="Enter a valid Name and start with Captial letter.!";
        event.preventDefault();
        return false;
    }

    let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(email)) {
        document.getElementById('erroremail').innerHTML="Enter a valid email address!";
        event.preventDefault();
        return false;
    }
    return true;
}

function addTask() {
    const input = document.getElementById('taskInput');
    const taskValue = input.value.trim();
    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        li.remove(); 
    };

    li.appendChild(deleteBtn); 
    document.getElementById('taskList').appendChild(li); 
    input.value = ""; 
}

