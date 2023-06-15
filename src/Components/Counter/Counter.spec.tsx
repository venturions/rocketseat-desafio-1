import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('should render the count when counterType is "created"', () => {
    render(<Counter count={5} counterType="created" />)
    const countElement = screen.getByText('5')
    expect(countElement).toBeInTheDocument()
  })

  it('should render the count and maxCount when counterType is "finished" and maxCount is defined', () => {
    render(<Counter count={2} counterType="finished" maxCount={10} />)
    const countElement = screen.getByText('2 de 10')
    expect(countElement).toBeInTheDocument()
  })
})
