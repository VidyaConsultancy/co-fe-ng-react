import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from '../app-header/AppHeader';
import { Todos } from '../todos/Todos';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">
        <Routes>
          <Route path='/todos' element={<Todos />} />
          <Route path='/' exact element={<h1>Base Path</h1>} />
        </Routes>
      </main>
      <footer className="app-footer">Footer</footer>
    </div>
  );
}

export default App;
