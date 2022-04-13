import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
const StatisticItem = ({ item }) => {
  const { label, percentage } = item;

  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};
export default StatisticItem;

StatisticItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
