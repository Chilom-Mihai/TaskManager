import { useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";

const ContainerBox = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTask = (task) => {
    setTaskList([
      ...taskList,
      {
        // taskName: task.name,
        // taskDate: task.date,
        // taskDesc: task.desc,
        // sau spread
        ...task,
        taskStatus: "Todo",
      },
    ]);
  };

  console.log(taskList);

  return (
    <div className="container-box">
      <h1>Tasks</h1>
      <h4>Your tasks in your space.</h4>
      {/* randare conditionala */}
      {taskList.length > 0 ? (
        <div className="tasks">
          {taskList.map((task, index) => (
            <TaskCard
              key={index}
              name={task.name}
              status={task.taskStatus}
              desc={task.desc}
              date={task.date}
            />
          ))}
        </div>
      ) : (
        <NoTasks />
      )}
      {/* <Modal /> */}
      <Modal isOpen={true}>
        <CreateTaskForm addTask={onAddTask} />
      </Modal>
    </div>
  );
};

export default ContainerBox;
