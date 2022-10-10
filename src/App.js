import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Wash Dishes", isDone: false, priority: true},
    {name: "Get Petrol", isDone: false, priority: false},
    {name: "Paint Ceiling", isDone: false, priority: true},
    {name: "Remove Bugs", isDone: false, priority: true},
  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
      <>
      <li key={index} className={task.isDone ? "done" : "not-done"}>
        <span> {task.name} </span>
        {task.isDone ? <span className="done">Done!</span> :
        <button onClick={() => completeTask(index)}>Complete?</button>}
      </li>

      <li key={index} className={task.priority ? "high" : "low"}>
        <span> {task.priority} </span>
        {task.priority ? <span className="high"> High priority! </span> :
        <button onClick ={() => changePriority(index)}>Make high priority?</button>}
      </li>

      <li key={index} className="delete-button">
        <button onClick={() => deleteTask(index)}>Delete?</button>
      </li>
      </>
    );
  });

  const handleTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const saveNewTask = (e) => {
    e.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, isDone: false, priority:false});
    setTasks(copyTasks);
    setNewTask("");
  };

  const completeTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].isDone = true;
    setTasks(copyTasks);
  };

  const deleteTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].remove();
    setTasks(copyTasks);
  }

  const changePriority = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].priority = true;
    setTasks(copyTasks);
  }

  return (
    <>
    <div className="App">
      <h1>Task List!</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a New Task</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Save New Task"/>
      </form>
    </div>
    </>

  );
}

export default App;
