import React from "react";

interface Props {
  title: string;
  dec: string | any;
  divide: boolean;
}

export const FieldHolderItem = ({ title, dec, divide }: Props) => {
  return (
    <div
      className="frame-10000027813"
      style={{
        width: divide ? "270px" : "100%",
      }}
    >
      <div className="preferred-payment-method-open">{title}</div>
      <div className="bank-transfer-open">{dec} </div>
    </div>
  );
};
