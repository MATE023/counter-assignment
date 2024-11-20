// import necessary react testing library helpers here
// import the Counter component here
import {getByText, render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from './../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("0")).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incButton);
  expect(screen.getByText("1")).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decButton);
  expect(screen.getByText("-1")).toBeInTheDocument();
});
