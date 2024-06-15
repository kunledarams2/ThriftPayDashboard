import React from "react";
import "./util.css";
// import NoContentSVG from "../../assets/no_content_backup.svg";
// import(`../../assets/no_content_backup.svg`)).ReactComponent;

interface Props {
  title: string;
  body: string;
  imagePath: string;
}

const EmptyContainer = ({ title, body, imagePath }: Props) => {
  return (
    <>
      <div className="frame-1000002737 ">
        <img src={imagePath} alt="SVG logo image" width="200" height="200" />

        <div className="text">
          <div className="your-wallet-is-empty">{title}</div>
          <div className="your-wallet-is-empty2">{body}</div>
        </div>
      </div>
    </>
  );
};

export default EmptyContainer;
