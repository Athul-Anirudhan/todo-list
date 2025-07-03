import Card from "./card";
import Input from "./Input";
import { useEffect, useState } from "react";

const Task = (() => {
    const initial_task = [];

    const [tasks, setTasks] = useState(initial_task);
    const addTaskHandler = async (newTask) => {
        const newtaskobj = {
            task_id: Math.random(),
            task_name: newTask
        }
        const response = await fetch("https://todo-backend-70pv.onrender.com/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newtaskobj)
        })
        if(response.status==201)
        {
            getTask();
            alert("New Task Added");
        }else{
            alert("could not add task");
        }
    }


    const deleteTaskHandler = async (taskId) => {
        const response=await fetch("https://todo-backend-70pv.onrender.com/" + taskId,{
            method:"DELETE"
        })
        if(response.status == 200)
        {
            getTask();
            alert("Task deleted");
        }
        else{
            alert("Failed to delete task");
        }
    }

    const getTask = async () => {
        const response = await fetch("https://todo-backend-70pv.onrender.com/")
        const taskList = await response.json();
        console.log(taskList);
        setTasks(taskList);
    }



    useEffect(() => { getTask() }, [])

    return (<div id='tasks'>
        <Input onnAddTask={addTaskHandler} />

        {
            tasks.map((tk) => (
                <Card task={tk} onDeleteTask={deleteTaskHandler} />
            ))
        }
    </div>)
})

export default Task;


