document.addEventListener('DOMContentLoaded',() => {
    const taskinput= document.getElementById('task-input');
    const addtaskbtn=document.getElementById('add-task-btn');
    const tasklist=document.getElementById('task-list');
    const emptyimage= document.getElementById("empty-image")

    const toggleemptystate=()=>{
        emptyimage.style.display=tasklist.children.length 
        === 0 ? 'block' : 'none';
    }


    //This function handles the task of putting the new task entered in a document
    const addTask=(event)=>{
           event.preventDefault();
           const taskText=taskinput.value.trim();
           if(!taskText){
            return;
           }

           const li=document.createElement('li')
           li.textContent=taskText;
           tasklist.appendChild(li);
           taskinput.value= ''; 
           toggleemptystate();

    }
    addtaskbtn.addEventListener('click',addTask)
    taskinput.addEventListener('keypress',(e)=>{
        if(e.key=='Enter'){
            addTask(e)
        }
    })
});
