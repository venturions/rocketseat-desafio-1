import { fireEvent, render, screen } from '@testing-library/react'
import { NewTaskBar } from './NewTaskBar'

describe('NewTaskBar', () => {
  it('should render correctly', () => {
    render(<NewTaskBar addTask={jest.fn()} />)

    const inputElement = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const buttonElement = screen.getByText('Criar')

    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  it('should update the task description correctly', () => {
    render(<NewTaskBar addTask={jest.fn()} />)

    const inputElement = screen.getByPlaceholderText(
      'Adicione uma nova tarefa',
    ) as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'Nova tarefa' } })

    expect(inputElement.value).toBe('Nova tarefa')
  })

  it('should call the addTask function when clicking the button', () => {
    const mockAddTask = jest.fn()
    render(<NewTaskBar addTask={mockAddTask} />)

    const inputElement = screen.getByPlaceholderText(
      'Adicione uma nova tarefa',
    ) as HTMLInputElement
    const buttonElement = screen.getByText('Criar')

    fireEvent.change(inputElement, { target: { value: 'Nova tarefa' } })
    fireEvent.click(buttonElement)

    expect(mockAddTask).toHaveBeenCalledWith({
      title: 'Nova tarefa',
      completed: false,
    })

    expect(inputElement.value).toBe('')
  })
})
