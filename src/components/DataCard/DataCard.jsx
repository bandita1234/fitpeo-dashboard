import React from 'react'
import styles from './dataCard.module.css'


const DataCard = (props) => {
  return (
    <div className={styles.datacard_main}>
        <div className={styles.datacardImg}>
            <img src={props.img} alt="" />
        </div>
        <div>
            <p>{props.title}</p>
            <h2>{props.value}</h2>
            <p><span>37.8%</span>this month</p>
        </div>
    </div>
  )
}

export default DataCard