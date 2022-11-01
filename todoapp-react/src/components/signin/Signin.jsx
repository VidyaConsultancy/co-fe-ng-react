import React from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="app-auth app-signin">
      <h2 className="auth-title">Welcome back! Login and start creating Todos</h2>
      <form className="form-signin" data-test-id="loginForm">
        <div className="form-group">
          <label for="username" className="sr-only">
            Enter your register email
          </label>
          <input
            type="email"
            id="username"
            name="username"
            className="form-input"
            placeholder="Here your email"
            autocomplete="username"
          />
        </div>
        <div className="form-group">
          <label for="password" className="sr-only">
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Here your password"
            autocomplete="current-password"
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="button" data-test-id="loginBtn">
            Login
          </button>
        </div>
        <div className="form-group">
          <span>
            Don't have an account{" "}
            <Link
              type="button"
              className="button button-link"
              to={"/auth/register"}
            >
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
