import { Button, Form } from "react-bootstrap";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import LoginSide from "./authside/LoginSide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import CheckEmail from "../../modal/CheckEmail";
import SuccessMessage from "../../modal/SuccessMessage";

const formSchema = z.object({
  emailAddress: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required..."),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ForgottenPasswordPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    setOpen(true);
    // setLoading(true);
  };
  const closeModalHander = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="body-component">
      {" "}
      <Form
        className="sign-up-empty"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <LoginSide /> */}

        <div className="content-login">
          <div className="frame-27-login">
            <div className="frame-27-login">
              <div className="sign-up-login">Forgot Your Password?</div>
              <div className="get-started-by-creating-your-admin-account">
                Don't worry! Enter your email address to reset your password.
              </div>
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

                <div className="frame-26">
                  <div className="already-have-an-account"></div>
                  <div className="login"></div>
                </div>
              </div>
              <Button
                className="button"
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {/* {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} */}
                <span>Submit</span>
              </Button>
            </div>
          </div>
        </div>
      </Form>
      {open && (
        <>
          <CheckEmail open={open} close={closeModalHander} />
        </>
      )}
    </div>
  );
};

export default ForgottenPasswordPage;
