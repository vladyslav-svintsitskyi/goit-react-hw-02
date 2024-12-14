import React from "react";
import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={styles.item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
