import { useState } from 'react';
import styles from './TaskItem.module.css'

const TaskItem = ({task}) => {
  const [check, setCheck] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
    setCheck(!check);
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input 
          type="checkbox"
          className={styles.checkbox}
          checked = {check}
          onChange={handleCheckBoxChange}
          name={task.name}
          id={task.id} 
        />
        <label
           htmlFor={task.id}
           className={styles.label}
        >
          {task.name}
          {/* <span className={styles.checkmark}></span> */}
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button 
          className="btn"
          aria-label={`Update ${task.name} Task`}
          // onClick={}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button 
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          // onClick={}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
      
    </li>
  )
}

export default TaskItem;