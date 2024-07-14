import React,{useState} from "react"
function ToDoList(){



    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');



    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function handleAdd(){
        if (newTask.trim() !== ''){
        setTasks(t => [...t, newTask]);
        setNewTask('');
        }
    

    }
    function handleDelete(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);

    }
    function handleUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index] ,updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks)

        }
    }
    function handleDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }








    return(

        <div className="container">
            <h1 className="title">To Do List</h1>
            <div className="fix">
            <div>
            <input type="text" placeholder="enter a task" className="input" onChange={handleInputChange}/>
            <button className="add-button" onClick={handleAdd}>add task</button>
            </div>
                {tasks.map((task,index) =>
                <div className="task-container" key={index}>
                <span>{task}</span>
                <div>
                <button className="delete-button" onClick={() => handleDelete(index)}>delete</button>
                <button className="move-button" onClick={() => handleUp(index)}>up</button>
                <button className="move-button" onClick={() => handleDown(index)}>down</button>
                </div>
                </div>
                )}
          </div>
        </div>
    )

}
export default ToDoList