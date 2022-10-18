import React from "react";
import styles from "../styles/Task.module.scss";

const Task = ({ value, id, deleteTask }) => {
  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className={styles.taskWrapper}>
      <p>{value}</p>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default Task;
