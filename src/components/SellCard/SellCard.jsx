import React from "react";
import styles from "./sellCard.module.css";

const SellCard = (props) => {
  return (
    <div className={styles.sellCard}>
      <div className={styles.sellcard_left}>
        <div className={styles.sellCard_img}>
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className={styles.sellCard_heading}>
          <h4>{props.product_title}</h4>
          <p className="paragraph">{props.product_desc}</p>
        </div>
      </div>

      <div className={styles.sellcard_right}>
        <p>32 in stock</p>
        <p style={{fontWeight:'800'}}>$ 45.99</p>
        <p>20</p>
      </div>
    </div>
  );
};

export default SellCard;
