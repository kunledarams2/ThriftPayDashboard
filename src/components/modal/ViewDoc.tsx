import { FunctionComponent } from "react";
import styles from "./ViewDoc.module.css";
import closeIcon from "../../assets/close_icon.svg";

interface Props {
  open?: boolean;
  close?: any;
  docuPath?: any;
}

const ViewDoc = ({ close, open, docuPath }: Props) => {
  const handelButtonClick = () => {
    close = true;
    open = false;
  };
  return (
    <div className={styles.viewPdf} onClick={() => handelButtonClick}>
      <div className={styles.header}>
        <div className={styles.menuAndName}>
          <img className={styles.icons} alt="" src={closeIcon} />
          <div className={styles.johnDoeElectricity}>Doc </div>
        </div>
        <div className={styles.downloadPrintMore}>
          <img className={styles.publishIcon} alt="" src={closeIcon} />
          <img className={styles.printIcon} alt="" src={closeIcon} />
        </div>
      </div>
      <div className={styles.pages}>
        <img
          className={styles.digitalMarketingServicesAgr}
          alt=""
          src={docuPath}
        />
      </div>
    </div>
  );
};

export default ViewDoc;
