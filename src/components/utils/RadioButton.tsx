import React from "react";
import "./util.css";

interface Props {
  selected: string;
  onChange: (value: string) => void;
  text: string;
  value: string;
}
export const RadioButton = ({ selected, onChange, text, value }: Props) => {
  return (
    <div
      className="modern-radio-container"
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={`radio-outer-circle ${value !== selected && "unselected"}`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div className="helper-text">{text}</div>
    </div>
  );
};
