import { useState } from 'react';
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [task, ...prevState]);
    console.log(task)
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) => prevState.map((task) => task.id === id ? {...task, checked: !task.checked} : task))
  }

  return (
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && 
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />}
    </div>
  );
}

export default App;
