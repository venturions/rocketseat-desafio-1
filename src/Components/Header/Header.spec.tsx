import { render, screen } from '@testing-library/react'
import { Header } from './Header'

it('should render a header html element', () => {
  const { getByTestId } = render(<Header />)
  const header = getByTestId('Header')
  expect(header).toBeInTheDocument()
})

it('should render a image', () => {
  render(<Header />)
  const image = screen.getByTestId('Logo To-Do List')
  expect(image).toBeInTheDocument()
})
