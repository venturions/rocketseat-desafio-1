import { PlusCircle } from 'phosphor-react'
import styles from './NewTaskBar.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { TaskProps } from '../../App'

interface NewTaskBarProps {
  addTask: (task: TaskProps) => void
}

export function NewTaskBar({ addTask }: NewTaskBarProps) {
  const [taskDescription, setTaskDescription] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    setTaskDescription(inputValue)

    if (inputValue.trim() === '' && inputValue !== '') {
      event.target.setCustomValidity(
        'O campo não pode ser composto apenas por espaços em branco.',
      )
    } else {
      event.target.setCustomValidity('')
    }
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    addTask({ title: taskDescription, completed: false })
    setTaskDescription('')
  }

  return (
    <form onSubmit={handleAddTask}>
      <div className={styles.newTaskBar}>
        <input
          value={taskDescription}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </form>
  )
}
