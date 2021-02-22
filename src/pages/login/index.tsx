import React from "react";
import Tilt from "react-tilt";
import { MailFilled, LockFilled } from "@ant-design/icons";
import Logo from "../../images/login/logo-2.png";
import { startAuthLogin } from "../../actions/authes";
import { connect } from "react-redux";
import { Auth,UserAuth } from "../../types/Auth/Auth";
import { useHistory } from "react-router-dom";




interface ILoginProps { }

type Props = ILoginProps & LinkDispatchProps;

const Login: React.FunctionComponent<Props> = (props) => {

  const [value, setValue] = React.useState({ email: "", password: "" });
  const [err, setErr] = React.useState({ email: "", password: "" });
  const [valid, setValid] = React.useState({ emailValid: false, passwordValid: false })
  const onChange = (e) => {
    let { name, value } = e.target;
    console.log(name)
    setValue(prevState => ({
      ...prevState, [name]: value
    }));
  }

  const handlErr = (e) => {
    let { name, value } = e.target;
    let { emailValid, passwordValid } = valid;
    let message: string = value == "" ? name+ " Do not be empty" : "";
    switch (name) {
      case "email":
        emailValid = message == "" ? true : false;
        if (
          value !== "" &&
          !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
          emailValid = false;
          message = "Your email is not valid !";
        }
        break;
        case "password":
          passwordValid = message == "" ? true : false;
          break;

      default:
        break;
    }
    setErr(prevState => ({
      ...prevState, [name]: message
    }));
    setValid(prevState=>({
      ...prevState,emailValid,passwordValid
    }))

  }
  let history:any = useHistory();
  const submit = (e) => {
    e.preventDefault();
    props.startAuthLogin(value,history);

  }
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
                  onChange={onChange}
                  onBlur={handlErr}
                  onKeyUp={handlErr}
                />
               
                <span className="focus-input" />
                <span className="symbol-input">
                  <MailFilled />
                </span>
                <p className="form-err">
                {err.email!=""?err.email:""}
                </p>
              </div>
              <div className="wrap-input">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  onBlur={handlErr}
                  onKeyUp={handlErr}
                />
                <span className="focus-input" />
                <span className="symbol-input">
                  <LockFilled />
                </span>
                <p className="form-err">
                {err.password!=""?err.password:""}
                </p>
              </div>
              <div className="container-login-form-btn">
                <button disabled={!(valid.emailValid&&valid.passwordValid)} onClick={submit} className="login-form-btn">Login</button>    
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

interface LinkDispatchProps {
  startAuthLogin: (user:UserAuth,history:any) => void;
}
const mapDispatchToProps = (
  ownProps: ILoginProps
): LinkDispatchProps => ({
  startAuthLogin,
});
export default connect(null, mapDispatchToProps)(Login);
