// import PropTypes from "prop-types";
import React from "react";
// import { IconInfoTypeFill } from "./IconInfoTypeFill";
import "../styles.css";
import { Form, InputGroup } from "react-bootstrap";

interface Props {
  status: "default";
  icon: boolean;
  iconPosition: "right" | "nil";
  alertType: "none" | "hint-icon";
  alertIcon: boolean;
  className: any;
  text: string;
  fieldClassName: any;
  text1: string;
  fieldClassNameOverride: any;
  // override: JSX.Element;
  hintFieldClassName: any;
  divClassName: any;
  text2: string;
}

const SignuPage = ({
  status,
  icon,
  iconPosition,
  alertType,
  alertIcon,
  className,
  text = "Label",
  fieldClassName,
  text1 = "Input",
  fieldClassNameOverride,
  //   override = <IconInfoTypeFill className="icon-info-type-fill" color="#111217" />,
  hintFieldClassName,
  divClassName,
  text2 = "This is a hint...",
}: Props): JSX.Element => {
  return (
    <Form className="frame-29">
      <Form.Group className="input-text" controlId="formBasicFirstName">
        <Form.Label className="label">First Name</Form.Label>
        <InputGroup hasValidation>
          {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
          <Form.Control
            type="text"
            placeholder="Enter first name"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please First name is required...
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="input-text" controlId="formBasicLastName">
        <Form.Label className="label">Last Name</Form.Label>
        <InputGroup hasValidation>
          {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
          <Form.Control
            type="text"
            placeholder="Enter last name"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Last name is required...
          </Form.Control.Feedback>
        </InputGroup>
        {/* <Form.Control
        className="field"
        type="text"
        placeholder="Enter last name"
      /> */}
      </Form.Group>

      <Form.Group className="input-text" controlId="formBasicLastName">
        <Form.Label className="label">Email Address</Form.Label>
        <InputGroup hasValidation>
          {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
          <Form.Control
            type="email"
            placeholder="Enter email address"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Invalid Email Address...
          </Form.Control.Feedback>
        </InputGroup>
        {/* <Form.Control
        className="field"
        type="email"
        placeholder="Enter email address"
      /> */}
      </Form.Group>

      <Form.Group className="input-text" controlId="formBasicPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control
          className="field"
          type="password"
          placeholder="Create a password"
        />
        <div className="hint-field">
          <svg
            className="icons2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_973_951)">
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
            Use a minimum of 8 characters, at least a uppercase letter,
            lowercase letters, a number, and a special characters.
          </div>
        </div>

        {/* <Form.Text className="this-is-a-hint">
Use a minimum of 8 characters, at least a uppercase letter,
lowercase letters, a number, and a special characters.
</Form.Text>  */}
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}
    </Form>
  );
};

// SignuPage.propTypes = {
//   status: PropTypes.oneOf(["default"]),
//   icon: PropTypes.bool,
//   iconPosition: PropTypes.oneOf(["right", "nil"]),
//   alertType: PropTypes.oneOf(["none", "hint-icon"]),
//   alertIcon: PropTypes.bool,
//   text: PropTypes.string,
//   text1: PropTypes.string,
//   text2: PropTypes.string,
// };

export default SignuPage;
