import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./Friends.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.container}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
