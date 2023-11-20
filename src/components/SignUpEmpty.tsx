import { FunctionComponent } from "react";
import "../styles.css";

const SignUpEmpty: FunctionComponent = () => {
  return (
    <div className="sign-upempty">
      <div className="image">
        <div className="logo">
          <img className="dreallogo1-2-icon" alt="" src="assets/whitelogo.svg" />
          <div className="dealthrift">DealThrift</div>
        </div>
      </div>
      <div className="content">
        <div className="content-inner">
          <div className="sign-up-parent">
            <div className="sign-up">Sign Up</div>
            <div className="get-started-by">
              {" "}
              Get started by creating your Admin account.
            </div>
          </div>
        </div>
        <div className="inputtext-parent">
          <div className="inputtext">
            <div className="label">First Name</div>
            <div className="field">
              <div className="input">Enter first name</div>
            </div>
          </div>
          <div className="inputtext">
            <div className="label">Last Name</div>
            <div className="field">
              <div className="input">Enter last name</div>
            </div>
          </div>
          <div className="inputtext">
            <div className="label">Email Address</div>
            <div className="field">
              <div className="input">Enter email address</div>
            </div>
          </div>
          <div className="inputtext">
            <div className="label">Password</div>
            <div className="field-parent">
              <div className="field3">
                <div className="input">Create a password</div>
                <img className="icons" alt="" src="/icons.svg" />
              </div>
              <div className="hint-field">
                <img className="icons" alt="" src="/icons1.svg" />
                <div className="this-is-a">
                  Use a minimum of 8 characters, at least a uppercase letter,
                  lowercase letters, a number, and a special characters.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="button1">Continue</div>
        </div>
        <div className="already-have-an-account-parent">
          <div className="already-have-an">Already Have an account?</div>
          <div className="login">Login</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpEmpty;

