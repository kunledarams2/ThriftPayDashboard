import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSide from "./LoginSide";
import { signup } from "../../services/authServices";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";
import EmailVerificationModal from "../modal/EmailVerificationModal";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required..").max(100),
  lastName: z.string().min(1, "Last name is required..").max(100),
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

const Registration: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [otp, setOtp] = useState<string>("");
  const onChange = (value: string) => setOtp(value);
  const closeModalHander = () => setOpen(false);
  const [email, setEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  let navigate: NavigateFunction = useNavigate();

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);

    setEmail(data.emailAddress);
    setOpen(true);

    // signup(
    //   data.firstName,
    //   data.firstName,
    //   data.emailAddress,
    //   data.password,
    //   true,
    //   "Admin@" + data.firstName
    // ).then(
    //   (response) => {
    //     if (response.data.success) {
    //       {
    //         setEmail(data.emailAddress);
    //         setOpen(true);
    //       }
    //       // navigate("/login");
    //     }
    //   },
    //   (e) => {
    //     console.log(e.response);
    //   }
    // );
  };

  return (
    <div className="body-component">
      <Form
        className="sign-up-empty"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <LoginSide />

        <div className="content-login">
          <div className="frame-27-login">
            <div className="frame-27-login">
              <div className="sign-up-login">Sign Up</div>
              <div className="get-started-by-creating-your-admin-account">
                Get started by creating your Admin account.
              </div>
              <div className="frame-29">
                <div className="input-text">
                  <label className="label">First Name</label>
                  <input
                    className="field"
                    placeholder="Enter first name"
                    type="text"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span className="this-is-an-error">
                      {errors.firstName?.message}
                    </span>
                  )}
                </div>
                <div className="input-text">
                  <label className="label">Last Name </label>
                  <input
                    className="field"
                    placeholder="Enter last name"
                    type="text"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="this-is-an-error">
                      {errors.lastName?.message}
                    </span>
                  )}
                </div>

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
                      placeholder="Create a password"
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
                  <div className="hint-field">
                    <svg
                      className="icons2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_973_951)">
                        <path
                          d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z"
                          fill="#111217"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_973_951">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="this-is-a-hint">
                      Use a minimum of 8 characters, at least a uppercase
                      letter, lowercase letters, a number, and a special
                      characters.
                    </div>
                  </div>
                  <Button
                    className="button"
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Continue
                  </Button>
                </div>
                <div className="frame-26">
                  <div className="already-have-an-account">
                    Already Have an account?
                  </div>
                  <div className="login">
                    <Link className="login" to={"/login"}>
                      {" "}
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
      {open && (
        <>
          <EmailVerificationModal
            emailAddress={email}
            open={open}
            close={closeModalHander}
            valueLength={4}
            value={otp}
            onChange={onChange}
          />
          {/* <SuccessMessage open={open} close={closeModalHander} /> */}
        </>
      )}
    </div>
  );
};

export default Registration;
