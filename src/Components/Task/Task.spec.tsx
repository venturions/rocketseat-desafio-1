import { render, screen, fireEvent } from '@testing-library/react'
import { Task } from './Task'

describe('Task', () => {
  const mockTask = {
    title: 'Task 1',
    completed: false,
  }

  const mockDeleteTask = jest.fn()
  const mockChangeTaskStatus = jest.fn()

  it('should render task title', () => {
    render(
      <Task
        task={mockTask}
        onDeleteTask={mockDeleteTask}
        onChangeTaskStatus={mockChangeTaskStatus}
      />,
    )

    const taskTitleElement = screen.getByText(mockTask.title)
    expect(taskTitleElement).toBeInTheDocument()
  })

  it('should render task checkbox', () => {
    render(
      <Task
        task={mockTask}
        onDeleteTask={mockDeleteTask}
        onChangeTaskStatus={mockChangeTaskStatus}
      />,
    )

    const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement

    expect(checkboxElement).toBeInTheDocument()
    expect(checkboxElement.checked).toBe(false)

    fireEvent.click(checkboxElement)
    expect(checkboxElement.checked).toBe(true)
    expect(mockChangeTaskStatus).toHaveBeenCalledTimes(1)
    expect(mockChangeTaskStatus).toHaveBeenCalledWith(mockTask)
  })

  it('should render delete button and calls deleteTask function', () => {
    render(
      <Task
        task={mockTask}
        onDeleteTask={mockDeleteTask}
        onChangeTaskStatus={mockChangeTaskStatus}
      />,
    )

    const deleteButtonElement = screen.getByRole('button', {
      name: /deletar tarefa/i,
    })
    expect(deleteButtonElement).toBeInTheDocument()

    fireEvent.click(deleteButtonElement)
    expect(mockDeleteTask).toHaveBeenCalledTimes(1)
    expect(mockDeleteTask).toHaveBeenCalledWith(mockTask.title)
  })

  it('should check the checkbox', () => {
    const completedTask = { ...mockTask, completed: false }

    render(
      <Task
        task={completedTask}
        onDeleteTask={mockDeleteTask}
        onChangeTaskStatus={mockChangeTaskStatus}
      />,
    )
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })

  it('should uncheck the checkbox', () => {
    const completedTask = { ...mockTask, completed: true }

    render(
      <Task
        task={completedTask}
        onDeleteTask={mockDeleteTask}
        onChangeTaskStatus={mockChangeTaskStatus}
      />,
    )

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    expect(mockChangeTaskStatus).toHaveBeenCalledTimes(1)
  })
})
