import React from "react";
import styles from "./Step.module.css";

const Step = ({ subText, text, step, additionalText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        <p className={styles.stepNumber}>{step}</p>
        <p className={styles.text}>{text}</p>
      </div>     
       <div><p className={styles.subText}>{subText}</p></div>
       <div><p className={styles.additionalText}>{additionalText}</p></div>
      <div className={styles.stepBorder}></div>
    </div>
  );
};

export default Step;
