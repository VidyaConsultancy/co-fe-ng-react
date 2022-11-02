import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render todos link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const todosLink = screen.getByText(/todos/i);
    expect(todosLink).toBeInTheDocument();
  });

  it('should render register link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const registerLink = screen.getByText(/register/i);
    expect(registerLink).toBeInTheDocument();
  })
})


/**
 * getByText
 * getByRole
 * getByLabelText
 * getByPlaceholderText
 * getByAltText
 * getByDisplayValue
 * 
 * getAllByText
 * getAllByRole
 * getAllByLabelText
 * getAllByPlaceholderText
 * getAllByAltText
 * getAllByDisplayValue
 */
