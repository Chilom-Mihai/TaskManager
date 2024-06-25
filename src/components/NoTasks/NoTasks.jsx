import React from "react";
import "./NoTasks.css";
import Button from "../Button/Button";
import noTasksImg from "../../assets/images/no-tasks.svg";

const NoTasks = () => {
  return (
    <div className="noTasks">
      {/* <img src="/images/no-tasks.svg" alt="" /> */}
      <img src={noTasksImg} alt="" />
      <h2>No Tasks Yet</h2>
      <p>You have no task created in your workspace yet.</p>
      <p>Get productive. Create a Task Now.</p>
      <Button text="Create a Task" />
    </div>
  );
};

export default NoTasks;
