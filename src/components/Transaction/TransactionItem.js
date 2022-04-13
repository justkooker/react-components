import React from "react";
import PropTypes from "prop-types";
const TransactionItem = ({ transaction }) => {
  const { type, amount, currency } = transaction;

  return (
    <>
      <td>{amount}</td>
      <td>{currency}</td>
      <td>{type}</td>
    </>
  );
};
export default TransactionItem;
TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }),
};
