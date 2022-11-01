import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="app-auth app-signup">
      <h2 className="auth-title">Create an account and start using the Todo app</h2>
      <form className="form-signup" data-test-id="signupForm">
        <div className="form-group">
          <label for="username" className="sr-only">
            Enter your email
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
            Create a password
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
          <button data-test-id="registerBtn" type="submit" className="button">
            Register
          </button>
        </div>
        <div className="form-group">
          <span>
            Already have an account{" "}
            <Link type="button" className="button button-link" to={'/auth/login'}>
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
