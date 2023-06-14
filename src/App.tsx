import { enqueueSnackbar } from 'notistack'
import styles from './App.module.css'
import { Header } from './Components/Header/Header'
import { NewTaskBar } from './Components/NewTaskBar/NewTaskBar'
import { ToDoList } from './Components/ToDoList/ToDoList'

import './global.css'

import { useState } from 'react'

export interface TaskProps {
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function addTask(newTask: TaskProps) {
    const taskAlreadyExists = tasks.some((item) => item.title === newTask.title)

    if (!taskAlreadyExists) {
      return setTasks([...tasks, newTask])
    }

    enqueueSnackbar('Já existe uma tarefa com essa descrição.', {
      variant: 'error',
    })
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.title !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  function changeTaskStatus(taskToChange: TaskProps) {
    const updatedTasks = tasks.map((task) => {
      if (task.title === taskToChange.title) {
        return { title: task.title, completed: !task.completed }
      } else {
        return task
      }
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <NewTaskBar addTask={addTask} />
          <ToDoList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onChangeTaskStatus={changeTaskStatus}
          />
        </div>
      </div>
    </>
  )
}

export default App
