import React from "react";
import Tilt from "react-tilt";
import { MailFilled, LockFilled } from "@ant-design/icons";
import Logo from "../../images/login/logo-2.png";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <React.Fragment>
      <div className="login-wolves">
        <div className="container">
          <div className="wrapper">
            <Tilt
              className="logo-wolves Tilt"
              options={{ scale: 1.1, perspective: 500, max: 25 }}
            >
              <img className="Tilt-inner" src={Logo} alt="logo" />
            </Tilt>
            <form className="login-form">
              <span className="login-form-title">Member Login</span>
              <div className="wrap-input">
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <span className="focus-input" />
                <span className="symbol-input">
                  <MailFilled />
                </span>
              </div>
              <div className="wrap-input">
                <input
                  className="input"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span className="focus-input" />
                <span className="symbol-input">
                  <LockFilled />
                </span>
              </div>
              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
              <div className="wrap-login-form-forgot">
                <span>Forgot </span>
                <a className="forgot-text" href="true">
                  Username / Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
