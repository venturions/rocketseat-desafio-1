import { TaskProps } from '../../App'
import { Counter } from '../Counter/Counter'
import { Task } from '../Task/Task'
import styles from './ToDoList.module.css'
import ClipboardImage from '../../assets/clipboard.svg'

export interface ToDoListProps {
  tasks: Array<TaskProps>
  onDeleteTask: (taskToDelete: string) => void
  onChangeTaskStatus: (taskToChange: TaskProps) => void
}

export function ToDoList({
  tasks,
  onDeleteTask,
  onChangeTaskStatus,
}: ToDoListProps) {
  const numberOfCompletedTasks = tasks.filter(
    (item) => item.completed === true,
  ).length

  return (
    <>
      <main className={styles.toDoList}>
        <header className={styles.header}>
          <strong className={styles.createdTasks}>
            Tarefas criadas
            <Counter counterType="created" count={tasks.length} />
          </strong>
          <strong className={styles.doneTasks}>
            Concluídas{' '}
            <Counter
              counterType="finished"
              count={numberOfCompletedTasks}
              maxCount={tasks?.length}
            />
          </strong>
        </header>
        {tasks.length > 0 ? (
          <>
            <div className={styles.taskList}>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.title}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onChangeTaskStatus={onChangeTaskStatus}
                  />
                )
              })}
            </div>
          </>
        ) : (
          <div className={styles.content}>
            <img src={ClipboardImage} alt="Imagem de uma prancheta"></img>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </main>
    </>
  )
}
