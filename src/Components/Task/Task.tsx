import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";
import { TaskProps } from "../../App";

interface TaskContentProps {
  task: TaskProps;
  onDeleteTask: (taskToDelete: string) => void;
  onChangeTaskStatus: (taskToChange: TaskProps) => void;
}

export function Task({
  task,
  onDeleteTask,
  onChangeTaskStatus,
}: TaskContentProps) {
  const [checked, setChecked] = useState(false);

  const handleChangeTaskStatus = () => {
    setChecked(!checked);
    onChangeTaskStatus(task);
  };

  function handleDeleteTask() {
    onDeleteTask(task.title);
  }

  return (
    <div className={styles.task}>
      <label>
        <input
          checked={checked}
          onChange={handleChangeTaskStatus}
          type="checkbox"
        />
      </label>
      <p
        className={
          task.completed ? styles.taskNameWhenChecked : styles.taskName
        }
      >
        {task.title}
      </p>
      <button title="Deletar tarefa">
        <Trash size={24} onClick={handleDeleteTask} />
      </button>
    </div>
  );
}
