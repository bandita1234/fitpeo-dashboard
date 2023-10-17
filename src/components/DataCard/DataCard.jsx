import React from 'react'
import styles from './dataCard.module.css'


const DataCard = (props) => {
  return (
    <div className={styles.datacard_main}>
        <div className={styles.datacardImg}>
            <img src={props.img} alt="" />
        </div>
        <div>
            <p className="paragraph">{props.title}</p>
            <h2>{props.value}</h2>
            <p><span style={props.up ? {color:'green',fontWeight: 'bolder'} : {color:'red', fontWeight: 'bolder'}}>{props.percentage} </span>this month</p>
        </div>
    </div>
  )
}

export default DataCard