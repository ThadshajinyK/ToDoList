
import styles from "./App.css";
import {useState} from "react";



function App () {

  const[toDoList,setToDoList]= useState([]);
  const[newTask,setNewTask]=useState("");

  const handleChange = (event)=>{
    setNewTask(event.target.value);
  };



  const addTask=()=>{
   // const newTodoList = [...toDoList,newTask];
   // setToDoList(newTodoList);

    //instead of above two lines we can use the following line
   // setToDoList([...toDoList,newTask]);
   // let arr =[]
    // const name="Pedro" // it does.t work with states
    // arr.push(name)
    const task ={
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id + 1,
      taskName: newTask,
    };
    setToDoList([...toDoList, task]);
  };



  const deleteTask = (id) => {
    // const newArr = toDoList.filter((todoTask)=>{
    //   if(todoTask===taskName)
    //   return false;
    //   else return true;
    // })
    const newArr = toDoList.filter((task)=>task.id !==id); // if only task is not equal to taskName value, returns true. 
    setToDoList(newArr)                                     // then those datas only will be stored. that means you deleted the specific task from the todoList
  };



  return (
  <div className="App">
     <div class="container-fluid p-5 my-5 bg-primary text-white text-center ">
      <h1>To Do List</h1>
       <input className="inputBox" onChange={handleChange} />
       <button class="btn btn-success" onClick={addTask} >Add Task</button>
       
     </div>
     <div className="list">
       {/* todolist mapping */}
      {toDoList.map((task)=>{
         return(
           <div className="container-fluid mb-2 text-center custom-show">
             <p class="h2 custom-text text-center"> {task.taskName}</p> 
             <button className="btn btn-outline-danger btn-sm" onClick={() => deleteTask(task.id)} >Delete</button>
           </div>
         );
       })}
     </div>
    
   </div>
  );
}


   
export default App;
