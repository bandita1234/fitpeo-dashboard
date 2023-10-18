import React from "react";
import styles from "./dataCard.module.css";

import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";

const DataCard = (props) => {
  return (
    <div className={styles.datacard_main}>
      <div className={styles.datacardImg}>
        <img src={props.img} alt="" />
      </div>
      <div>
        <p className="paragraph">{props.title}</p>
        <h2>{props.value}</h2>
        <div className={styles.dataCard_desc}>
          <span
            style={
              props.up
                ? { color: "green", fontWeight: "bolder" }
                : { color: "red", fontWeight: "bolder" }
            }
          >
            {props.up ? <BiUpArrowAlt/> : <BiDownArrowAlt />}
            {props.percentage}{" "}
          </span>
          this month
        </div>
      </div>
    </div>
  );
};

export default DataCard;
