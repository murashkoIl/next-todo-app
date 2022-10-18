import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarContainer from "../components/NavbarContainer";
import { tasksAction } from "../redux/slices/tasksSlice";
import Task from "../components/Task";

const Index = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTaskClick = () => {
    dispatch(
      tasksAction.setTask({
        id: Date.now(),
        value,
      })
    );
    setValue("");
  };

  const handleDeleteTask = (id) => {
    dispatch(tasksAction.deleteTask(id));
  };

  return (
    <>
      <NavbarContainer keywords={"Home Page"}>
        <h1>Home Page</h1>
        <input onChange={handleInputChange} value={value} type="text"></input>
        <button onClick={handleAddTaskClick}>Add Task</button>
        <div>
          Tasks:{" "}
          {tasks.map(({ id, value }) => (
            <Task
              key={id}
              value={value}
              id={id}
              deleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </NavbarContainer>
    </>
  );
};

export default Index;
