import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";
import styles from "./Statistics.module.css";
const Statistics = ({ statistic }) => {
  function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {statistic.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            style={{ background: generateColor() }}
          >
            <StatisticItem item={item} />
          </li>
        ))}{" "}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
