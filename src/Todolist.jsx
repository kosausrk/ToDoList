import React, { useState } from "react"


function ToDoList(){
    const [tasks,setTasks] = useState(["react app", "journal", "fix"]) //empty array initially, each task has addiontal task 
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value) //changes state based on value of text field 
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
        <>
        <div className="to-do-list">
            <h1>To Do List!</h1>

            <div>
                <input type="text" placeholder="Enter task: " value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task!</button>
            </div>

        </div>

        <ol> 
            {tasks.map((task,index) => /* Map out every task into an item, add a delete button*/
                <li key={index}>
                    <span className="text">{task}</span>
                    <button>
                        Delete Task
                    </button>
                </li>
            )}
        </ol>
        
        </>
    )
}

export default ToDoList 