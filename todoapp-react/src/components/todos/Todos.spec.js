import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Todos } from "./Todos";
import { todoReducer } from '../../store/todo/todo.slice';
import { act } from 'react-dom/test-utils';

describe('Todos', () => {
  const handlers = [
    rest.get('http://localhost:4000/todos', (req, res, ctx) => {
      return res(ctx.json([
        { id: 1, todo: 'Learn HTML', isCompleted: true },
        { id: 2, todo: 'Learn CSS', isCompleted: true }
      ]), ctx.delay(200))
    }),

    rest.post('http://localhost:4000/todos', async (req, res, ctx) => {
      const reqBody = await req.json();
      const todo = { ...reqBody, id: 3 };
      return res(ctx.json(todo), ctx.delay(200))
    }),

    rest.delete('http://localhost:4000/todos/:todoId', async (req, res, ctx) => {
      return res(ctx.json(), ctx.delay(200));
    }),

    rest.put('http://localhost:4000/todos/:todoId', async (req, res, ctx) => {
      const todo = await req.json();
      return res(ctx.json(todo), ctx.delay(200));
    })
  ]

  const server = setupServer(...handlers);

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  const store = configureStore({
    reducer: {
      todo: todoReducer
    }
  });

  it('should render component', () => {
    const { baseElement } = render(<Provider store={store}>
      <Todos />
    </Provider>)
    expect(baseElement).toMatchSnapshot();
  })

  it('should render no todo item initially then render todo items', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Todos />
        </Provider>
      </BrowserRouter>
    )

    expect(screen.getByText(/You don't have any todos yet/i)).toBeInTheDocument();
    expect(await (await screen.findAllByRole('listitem')).length).toEqual(2);
    expect(await screen.findByText(/learn html/i)).toBeInTheDocument();
  })

  it('should add new todo', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Todos />
        </Provider>
      </BrowserRouter>
    )

    await userEvent.type(screen.getByPlaceholderText(/what would you like to do/i), 'Learn Reactjs');
    expect(await screen.findByDisplayValue('Learn Reactjs')).toBeInTheDocument();
    fireEvent.submit(screen.getByTestId('addTodoForm'), { preventDefault: () => { } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
    })
    
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toEqual(3);
    expect(await screen.findByText(/Learn Reactjs/i)).toBeInTheDocument();
  })

  it('should delete a todo', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Todos />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.click(await (await screen.findAllByTestId('deleteTodoButton')).at(0)); 

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
    })

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toEqual(1);
  })

  it('should toggle a todo status', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Todos />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.click(await (await screen.findAllByRole('checkbox')).at(0)); 

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
    })

    const listItems = await screen.findAllByRole('checkbox');
    expect(listItems.at(0).checked).toBeTruthy();
  })
})
