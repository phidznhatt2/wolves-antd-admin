import React from "react";
import Tilt from "react-tilt";
import { MailFilled, LockFilled } from "@ant-design/icons";
import Logo from "../../images/login/logo-2.png";
import { preProcessFile } from "typescript";
import Password from "antd/lib/input/Password";


interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {

  const [value, setValue] = React.useState({ email: "", password: "" });
  const [err, setErr] = React.useState({ email: "", password: "" });
  const [valid, setValid] = React.useState({ emailValid: true, passwordValid: true, formvalid: false })
  // const[password,setPassword]=React.useState("");

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
  React.useEffect(() => {
    FormValid();
  },[value]);

  const FormValid=()=>{
    let { emailValid, passwordValid } = valid;
    let form:boolean=emailValid&&passwordValid;
    console.log(form);
    setValid(prevState => ({
      ...prevState, formvalid:form
    }));
}

  const submit = (e) => {
    e.preventDefault();
    console.log(value);
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
                <button disabled={!valid.formvalid} onClick={submit} className="login-form-btn">Login</button>    
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
