import { render, screen, fireEvent } from '@testing-library/react';
import { TodoHeader } from './TodoHeader';

describe('TodoHeader', () => {
  it('should render todos heading', () => {
    render(<TodoHeader />);
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  })

  it('should render `What would you like to do` label', () => {
    render(<TodoHeader />);
    expect(screen.getByLabelText(/What would you like to do/i)).toBeInTheDocument();
  })

  it('should render input element with placeholder text `What would you like to do`', () => {
    render(<TodoHeader />);
    expect(screen.getByPlaceholderText(/What would you like to do/i)).toBeInTheDocument();
  })

  it('should render a submit button', () => {
    render(<TodoHeader />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('should display the enter value', () => {
    const text = 'Learn Reactjs';
    render(<TodoHeader />);
    fireEvent.change(screen.getByPlaceholderText(/What would you like to do/i), {
      target: { value: text }
    })
    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
  })

  it('should invoke handleSubmit function', () => {
    const handleSubmitMock = jest.fn();
    const text = 'Learn Reactjs';
    render(<TodoHeader handleSubmit={handleSubmitMock} />);

    fireEvent.change(screen.getByPlaceholderText(/What would you like to do/i), {
      target: { value: text }
    })

    fireEvent.submit(screen.getByTestId('addTodoForm'), { preventDefault: () => { } });
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    expect(handleSubmitMock).toHaveBeenCalledWith(text);
  })
})
