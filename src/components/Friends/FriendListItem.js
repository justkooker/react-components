import React from "react";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";
const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  const statusClass = isOnline ? "online" : "offline";
  return (
    <>
      <span className={styles[statusClass]}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar:
    "https://cdn.pixabay.com/photo/2020/11/27/13/13/man-5781874_960_720.png",
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};
export default FriendListItem;
