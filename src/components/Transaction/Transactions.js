import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";

import styles from "./Transaction.module.css";
const Transaction = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tBodyItem}>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <TransactionItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Transaction;

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
