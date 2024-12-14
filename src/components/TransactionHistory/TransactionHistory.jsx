import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.column}>Type</th>
            <th className={styles.column}>Amount</th>
            <th className={styles.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id} className={styles.row}>
                <td className={styles.cell}>{item.type}</td>
                <td className={styles.cell}>{item.amount}</td>
                <td className={styles.cell}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
