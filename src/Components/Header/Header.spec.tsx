import { render } from '@testing-library/react'
import { Header } from './Header'

it('should render a header html element', () => {
  const { getByTestId } = render(<Header />)
  const header = getByTestId('Header')
  expect(header).toBeInTheDocument()
})

it('should render a image', () => {
  const { getByAltText } = render(<Header />)
  const image = getByAltText('Logo To-Do List')
  expect(image).toBeInTheDocument()
})
