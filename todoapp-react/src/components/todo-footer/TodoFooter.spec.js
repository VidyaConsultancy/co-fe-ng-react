import { render, screen } from '@testing-library/react';
import { TodoFooter } from "./TodoFooter";

describe('TodoFooter', () => {
  it('should not render total or complete value', () => {
    render(<TodoFooter />);
    expect(screen.queryByText(/total/i)).toBeNull();
    expect(screen.queryByText(/completed/i)).toBeNull();
  })
  
  it('should render total 4', () => {
    render(<TodoFooter total={4}/>);
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  })
  
  it('should render complete 2', () => {
    render(<TodoFooter completed={2} total={4} />);
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  })
})
