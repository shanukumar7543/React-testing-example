import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  const title = screen.getByTitle('new pic')
  const name = screen.getByText('Shanu kumar')
  expect(name).toBeInTheDocument()
  expect(title).toBeInTheDocument()
  expect(linkElement).toBeInTheDocument()
})
