import React from "react";
import { useHistory } from "react-router-dom";

import logoImg from "../assets/images/logo/workflow-mark.svg";

import { LockClosedIcon } from "@heroicons/react/solid";

const Login = () => {

    const history = useHistory();

    const loginHandler = (e) => {
        e.preventDefault();
        history.push('/user/:uid/');
    };

  return (
    <div className="h-full bg-gray-50">
      <div className="h-full">
        <div className="login">
          <div className="login__Container my-44">
            <div>
              <img
                className="login__Image"
                src={logoImg}
                alt="Workflow"
              />
              <h2 className="login__Heading">Sign in to your account</h2>
            </div>
            <form className="login__Form--Controller" onSubmit={loginHandler} action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="login__Form--Input"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="login__Form--Input"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="login__Form--Remember"
                  />
                  <label
                    htmlFor="remember-me"
                    className="login__Form--Remember-Label"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
