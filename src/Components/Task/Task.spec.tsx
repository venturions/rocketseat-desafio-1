import { render, screen, fireEvent } from '@testing-library/react'
import { Task } from './Task'

describe('Task', () => {
  const task = {
    title: 'Task 1',
    completed: false,
  }

  const deleteTask = jest.fn()
  const changeTaskStatus = jest.fn()

  it('should render task title', () => {
    render(
      <Task
        task={task}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />,
    )

    const taskTitleElement = screen.getByText(task.title)
    expect(taskTitleElement).toBeInTheDocument()
  })

  it('should render task checkbox', () => {
    render(
      <Task
        task={task}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />,
    )

    const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement

    expect(checkboxElement).toBeInTheDocument()
    expect(checkboxElement.checked).toBe(false)

    fireEvent.click(checkboxElement)
    expect(checkboxElement.checked).toBe(true)
    expect(changeTaskStatus).toHaveBeenCalledTimes(1)
    expect(changeTaskStatus).toHaveBeenCalledWith(task)
  })

  it('should render delete button and calls deleteTask function', () => {
    render(
      <Task
        task={task}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />,
    )

    const deleteButtonElement = screen.getByRole('button', {
      name: /deletar tarefa/i,
    })
    expect(deleteButtonElement).toBeInTheDocument()

    fireEvent.click(deleteButtonElement)
    expect(deleteTask).toHaveBeenCalledTimes(1)
    expect(deleteTask).toHaveBeenCalledWith(task.title)
  })

  it('should check the checkbox', () => {
    const completedTask = { ...task, completed: false }

    render(
      <Task
        task={completedTask}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />,
    )
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })

  it('should uncheck the checkbox', () => {
    const completedTask = { ...task, completed: true }

    render(
      <Task
        task={completedTask}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />,
    )

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    expect(changeTaskStatus).toHaveBeenCalledTimes(1)
  })
})
