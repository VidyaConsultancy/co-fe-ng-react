import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Todos } from "./Todos";
import { todoReducer } from '../../store/todo/todo.slice';

describe('Todos', () => {
  const store = configureStore({ reducer: {
    todo: todoReducer
  }});

  it('should render component', () => {
    const view = render(<Provider store={store}>
      <Todos />
    </Provider>)
    expect(view.baseElement).toMatchSnapshot();
  })
})
