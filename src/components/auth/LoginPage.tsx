import { Button, Form, Modal } from "react-bootstrap";
import LoginSide from "./LoginSide";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { createRoot } from "react-dom/client";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../../services/authServices";
import SuccessMessage from "../modal/SuccessMessage";
import EmailVerificationModal from "../modal/EmailVerificationModal";
// import "./auth.css";

const formSchema = z.object({
  emailAddress: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required..."),
  password: z
    .string()
    .min(1, "Password is required ...")
    .min(8, "Password must have more than 8 characters ....")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/,
      "Password must contain number, special characters, uppercase and lowercase letter"
    ),
});

type FormSchemaType = z.infer<typeof formSchema>;
type Props = {};

const LoginPage: React.FC<Props> = () => {
  let navigate: NavigateFunction = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const [otp, setOtp] = useState<string>("");
  const onChange = (value: string) => setOtp(value);
  const closeModalHander = () => setOpen(false);

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    // console.log(data);
    setLoading(true);

    login(data.emailAddress, data.password).then(
      (respo) => {
        console.log(respo.data.user.is_staff);
        if (respo.data.user.is_staff) {
          navigate("/");
        } else {
          setLoading(false);
          setMessage("Access not allow..");
          setOpen(true);
        }

        // window.location.reload();
      },
      (error) => {
        const errorMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(errorMessage);
        // setOpen(true);
      }
    );
    // setLoading(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  return (
    // <div>
    <div>
      {/* {open ? <div className="overlay-modal"> </div> : null} */}
      <Form
        className="sign-up-empty"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <LoginSide />

        <div className="content-login">
          <div className="frame-27-login">
            <div className="frame-27-login">
              <div className="sign-up-login">Weclome Back!</div>
              <div className="get-started-by-creating-your-admin-account">
                Please log in to access the Admin dashboard
              </div>

              {/* {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )} */}
              <div className="frame-29">
                <div className="input-text">
                  <label className="label">Email Address</label>
                  <input
                    className="field"
                    placeholder="Enter email address"
                    type="email"
                    {...register("emailAddress")}
                  />
                  {errors.emailAddress && (
                    <span className="this-is-an-error">
                      {errors.emailAddress?.message}
                    </span>
                  )}
                </div>

                <div className="frame-3">
                  <label className="label">Password</label>
                  <div className="field">
                    <input
                      className="input"
                      placeholder="Enter Password"
                      type="password"
                      {...register("password")}
                    />

                    <i>
                      <svg
                        className="icons"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_973_947)">
                          <path
                            d="M15.4569 7.7975C15.435 7.74813 14.9056 6.57375 13.7287 5.39687C12.1606 3.82875 10.18 3 7.99999 3C5.81999 3 3.83937 3.82875 2.27124 5.39687C1.09437 6.57375 0.562494 7.75 0.543119 7.7975C0.51469 7.86144 0.5 7.93064 0.5 8.00062C0.5 8.0706 0.51469 8.1398 0.543119 8.20375C0.564994 8.25312 1.09437 9.42688 2.27124 10.6038C3.83937 12.1713 5.81999 13 7.99999 13C10.18 13 12.1606 12.1713 13.7287 10.6038C14.9056 9.42688 15.435 8.25312 15.4569 8.20375C15.4853 8.1398 15.5 8.0706 15.5 8.00062C15.5 7.93064 15.4853 7.86144 15.4569 7.7975ZM7.99999 10.5C7.50554 10.5 7.02219 10.3534 6.61107 10.0787C6.19995 9.80397 5.87951 9.41352 5.6903 8.95671C5.50108 8.49989 5.45157 7.99723 5.54803 7.51227C5.64449 7.02732 5.8826 6.58186 6.23223 6.23223C6.58186 5.8826 7.02732 5.6445 7.51227 5.54804C7.99722 5.45157 8.49989 5.50108 8.9567 5.6903C9.41352 5.87952 9.80396 6.19995 10.0787 6.61107C10.3534 7.0222 10.5 7.50555 10.5 8C10.5 8.66304 10.2366 9.29893 9.76776 9.76777C9.29892 10.2366 8.66304 10.5 7.99999 10.5Z"
                            fill="#444A5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_973_947">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </div>
                  <div className="hint-field">
                    {" "}
                    {errors.password && (
                      <span className="this-is-an-error">
                        {errors.password?.message}
                      </span>
                    )}
                  </div>
                  <div className="forgot-password">
                    <Link className="forgot-password" to={"/forgot/password"}>
                      Forgot Password?
                    </Link>
                  </div>

                  <div></div>

                  <Button
                    className="button"
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </Button>
                </div>
                <div className="frame-26">
                  <div className="already-have-an-account">
                    Don’t have an account?
                  </div>
                  <div className="login">
                    {" "}
                    <Link className="login" to={"/register"}>
                      SignUp
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>

      {/* </div> */}
      {/* {open && (
        <>
         
          <SuccessMessage open={open} close={closeModalHander} />
        </>
      )} */}
    </div>
  );
};

export default LoginPage;
