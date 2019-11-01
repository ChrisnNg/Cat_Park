import React from "react";
import "./Login.css";

const Login = props => {
  return (
    <section>
      <form className="Login">
        <div className="form-group row">
          <label htmlFor="Username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Username"
            />
          </div>
          <label htmlFor="Password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
