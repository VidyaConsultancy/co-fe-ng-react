import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from '../app-header/AppHeader';
import { AppFooter } from '../app-footer/AppFooter';
import { TodoDetail } from '../todo-detail/TodoDetail';
import { Todos, TodosComponentContainer } from '../todos/Todos';
import { Signup } from '../signup/Signup';
import { Signin } from '../signin/Signin';
import './App.css';

function App() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">
        <Routes>
          {accessToken ? (
            <>
              <Route path="/todos/:todoId" element={<TodoDetail />} />
              <Route path="/todos" exact element={<Todos />} />
            </>
          ) : null}
          <Route
            path="/todos-copy"
            exact
            element={<TodosComponentContainer />}
          />
          <Route path="/auth/register" element={<Signup />} />
          <Route path="/auth/login" element={<Signin />} />
          <Route path="/" exact element={<h1>Base Path</h1>} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
