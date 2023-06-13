import { render } from '@testing-library/react'
import { NewTaskBar } from './NewTaskBar'

it('should render a input and a button', () => {
  const { getByRole } = render(<NewTaskBar addTask={() => null} />)
  const input = getByRole('textbox')
  const button = getByRole('button')
  expect(input).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})
