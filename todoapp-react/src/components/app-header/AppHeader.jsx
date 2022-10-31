import React from "react";
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <header class="header">
      <nav class="nav">
        <NavLink to="/" className="logo">
          Todo
        </NavLink>
        <menu class="navbar">
          <li class="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/todos" className="nav-link">
              Todo
            </NavLink>
          </li>
          <li class="nav-item">
            <button className="nav-link button">
              Logout
            </button>
          </li>
          <li class="nav-item">
            <NavLink to="/auth/register" className="nav-link">
              Register
            </NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};
