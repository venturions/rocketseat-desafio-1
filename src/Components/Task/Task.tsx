import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { useEffect, useState } from 'react'
import { TaskProps } from '../../App'
import checkboxIcon from '../../assets/vector.svg'

interface TaskContentProps {
  task: TaskProps
  onDeleteTask: (taskToDelete: string) => void
  onChangeTaskStatus: (taskToChange: TaskProps) => void
}

export function Task({
  task,
  onDeleteTask,
  onChangeTaskStatus,
}: TaskContentProps) {
  const [checked, setChecked] = useState(false)

  const handleChangeTaskStatus = () => {
    setChecked(!checked)
    onChangeTaskStatus(task)
  }

  function handleDeleteTask() {
    onDeleteTask(task.title)
  }

  useEffect(() => {
    const checkbox = document.getElementById('checkbox') as HTMLInputElement

    if (checkbox) {
      const handleChange = () => {
        if (checkbox.checked) {
          checkbox.style.backgroundImage = `url(${checkboxIcon})`
        } else {
          checkbox.style.backgroundImage = 'none'
        }
      }

      checkbox.addEventListener('change', handleChange)

      return () => {
        checkbox.removeEventListener('change', handleChange)
      }
    }
  }, [])

  return (
    <div className={styles.task}>
      <label>
        <input
          id="checkbox"
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
  )
}
