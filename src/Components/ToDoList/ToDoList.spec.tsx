import { render, screen, within } from '@testing-library/react'
import { ToDoList, ToDoListProps } from './ToDoList'
import { TaskProps } from '../../App'

const renderToDoList = (props: ToDoListProps) => {
  return render(<ToDoList {...props} />)
}

describe('ToDoList', () => {
  const tasks: TaskProps[] = [
    {
      title: 'Tarefa 1',
      completed: false,
    },
    {
      title: 'Tarefa 2',
      completed: true,
    },
    {
      title: 'Tarefa 3',
      completed: true,
    },
  ]

  const onDeleteTask = jest.fn()
  const onChangeTaskStatus = jest.fn()

  it('should render the correct number of created tasks', () => {
    renderToDoList({
      tasks,
      onDeleteTask,
      onChangeTaskStatus,
    })

    const createdTasksContainer = screen
      .getByText('Tarefas criadas')
      .closest('strong')!

    const createdTasks =
      tasks.length > 0
        ? within(createdTasksContainer).queryByText(tasks.length.toString())
        : within(createdTasksContainer).queryByText('0')

    expect(createdTasks).toBeInTheDocument()
  })

  it('should render the correct number of finished tasks', () => {
    renderToDoList({
      tasks,
      onDeleteTask,
      onChangeTaskStatus,
    })

    const finishedTasksContainer = screen
      .getByText('Concluídas')
      .closest('strong')!

    const completedTasksCount = tasks.filter((item) => item.completed).length

    const finishedTasks =
      tasks.length > 0
        ? within(finishedTasksContainer).queryByText(
            `${completedTasksCount} de ${tasks.length}`,
          )
        : within(finishedTasksContainer).queryByText('0')

    expect(finishedTasks).toBeInTheDocument()
  })
})
