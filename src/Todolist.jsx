import React, { useState } from "react"
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ToDoList(){
    const [tasks,setTasks] = useState(["eat", "sleep", "repeat"]) //empty array initially, each task has addiontal task 
    const [newTask, setNewTask] = useState("") //newTask holds the value of the task to be added 

    //Categories 
    const [category,setCategory] = useState(["School", "Work", "Hobby"])




    function handleInputChange(event){
        setNewTask(event.target.value) //changes state based on value of text field 
    }

    function addTask(){
        if (newTask.trim() !== ""){ //if input is not a empty string
            setTasks(t => [...t, newTask]) //spread operator to append for new task 
            setNewTask("") //clears hook so when u add task its cleared   
        }
    }

    function handleEnter(event){ //listens in for enter key, addTask() called after
        if (event.key === "Enter"){
            addTask()

            console.log("Task Entered.");
        }
    }

    function clearAll(){
        setTasks([])
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index) //include all tasks EXCEPT the one index u want deleted 
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        const taskList = [...tasks]
        if (index >0){
            [taskList[index],taskList[index-1]] = [taskList[index-1],taskList[index]] //switches task ahead for the one below 
            setTasks(taskList)
        }
    }

    function moveTaskDown(index){
        const taskList = [...tasks]
        if (index < tasks.length-1){ //if task is not comeplety at bottom u can move it down
            [taskList[index],taskList[index+1]] = [taskList[index+1],taskList[index]] //move task down 
            setTasks(taskList)
        }
    }

    return(
        <>
        <div className="to-do-list">
            <div className="inputWrapper">

            <h1 className="mainTitle">To Do List!</h1>

            <div className="inputButtonWrapper">
                <input className ="inputBox" type="text" placeholder="Enter task: " value={newTask} onChange={handleInputChange} onKeyDown={handleEnter}/>
                <button className="add-button btn btn-success" onClick={addTask}>Add Task!</button>
                <button className="clearAll btn btn-danger" onClick={clearAll}>Clear All</button>


                {/**Dropdown */}
                <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category: 
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">School</a>
                    <a class="dropdown-item" href="#">Work</a>
                    <a class="dropdown-item" href="#">Hobby</a>
                </div>
                </div>
            </div>

            </div>
            

        </div>

        <ol> 
            {tasks.map((task,index) => /* Map out every task into an item, add a delete button*/
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button btn btn-danger" onClick={() => deleteTask(index)}>  
                        Delete Task
                    </button>

                    <button className="moveup-button btn btn-primary" onClick={() => moveTaskUp(index)}>  
                        Move Up
                    </button>


                    <button className="movedown-button btn btn-info" onClick={() => moveTaskDown(index)}>  
                        Move Down
                    </button>

                    <h4>Category: </h4>
                </li>
            )}
        </ol>
        
        </>
    )
}

export default ToDoList 