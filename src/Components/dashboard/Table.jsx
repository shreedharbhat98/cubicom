import React from 'react';
import styles from "./Table.module.css";

function Table() {
    const data = [
        {
            name: "Daarun Shaikh",
            del: 34,
            undel: 27,
            NA: 0,
            delivery: 97
        },
        {
            name: "Daha Moshin",
            del: 34,
            undel: 27,
            NA: 0,
            delivery: 86
        },
        {
            name: "Dahana Gaitonde",
            del: 34,
            undel: 27,
            NA: 0,
            delivery: 78
        },
        {
            name: "Ganesh Gaitonde",
            del: 34,
            undel: 27,
            NA: 0,
            delivery: 74
        },
        {
            name: "Johnny smith",
            del: 34,
            undel: 27,
            NA: 0,
            delivery: 72
        },
        {
            name: "Falcon Mouly",
            del: 34,
            undel: 27,
            NA: 0,
            delivery: 70
        }
    ]
    return (
        <table>
            <thead>
                <tr>
                    <td className={styles.name}>FE NAME</td>
                    <td>DEL</td>
                    <td>UNDEL</td>
                    <td>NA</td>
                    <td>DELIVERY IN %</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) =>
                    <tr className={styles.newTR} key={index}>
                        <td className={styles.paddingTop} className={styles.name}>{item.name}</td>
                        <td className={styles.paddingTop}>{item.del}</td>
                        <td className={styles.paddingTop}>{item.undel}</td>
                        <td className={styles.paddingTop}>{item.NA}</td>
                        <td className={styles.progressBar}>
                            {item.delivery} %
                        <div className={styles.div}>
                                <div className={styles.bar} style={{ width:item.delivery+"%" }}></div>
                            </div>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default Table;