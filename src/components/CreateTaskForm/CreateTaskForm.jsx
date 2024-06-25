import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskdesc, setTaskDesc] = useState("");

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };
  const handleTaskDate = (event) => {
    setTaskDate(event.target.value);
  };
  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
  };

  const newTask = {
    name: taskName,
    date: taskDate,
    desc: taskdesc,
  };

  const resetState = () => {
    setTaskName("");
    setTaskDate("");
    setTaskDesc("");
  };

  const handleSubmitForm = (event) => {
    // console.log("Submit");
    event.preventDefault();
    props.addTask(newTask);
    resetState();
  };

  // console.log(taskName, taskDate, taskdesc);
  return (
    <div className="createTaskForm">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          onChange={handleTaskName}
          value={taskName}
        />
        <label htmlFor="taskDate">Due Date</label>
        <input
          type="date"
          id="taskDate"
          placeholder="Today"
          onChange={handleTaskDate}
          value={taskDate}
        />
        <label htmlFor="taskDescription">Task Description</label>
        <textarea
          id="taskDescription"
          onChange={handleTaskDesc}
          value={taskdesc}
        ></textarea>
        <Button text="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
