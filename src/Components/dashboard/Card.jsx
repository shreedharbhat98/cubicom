import React from 'react';
import styles from "./Card.module.css";

function Card({data}) {
    return (
        <div className={styles.container}>
            <div className={styles.topGrid}>
                <div className={styles.numberContainer}>
                    <span className={styles.number}> {data.number} </span>
                </div>
                <div className={styles.iconGrid}>
                    <img className={styles.marginAuto} src={data.img} alt="logo"/>
                </div>
            </div>
            <div className={styles.descContainer}>
                <div className={styles.type}>{data.type} </div>
                <div className={styles.sub}>{data.desc} </div>
            </div>
        </div>
    )
}
export default Card