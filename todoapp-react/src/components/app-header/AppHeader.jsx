import React from "react";
import { NavLink } from 'react-router-dom';
import "./AppHeader.css";

export const AppHeader = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="logo">
          Todo
        </NavLink>
        <menu className="navbar">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/todos" className="nav-link">
              Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link button">
              Logout
            </button>
          </li>
          <li className="nav-item">
            <NavLink to="/auth/register" className="nav-link">
              Register
            </NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};
