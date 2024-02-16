import sum from './sum'
import { Mul } from './new'

test('Add two numbers', () => {
  expect(sum(10, 10)).toBe(20)
})
test('Mul two numbers', () => {
  expect(Mul(10, 10)).toBe(100)
})
