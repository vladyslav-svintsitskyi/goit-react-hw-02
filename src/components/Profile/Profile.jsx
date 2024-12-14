import React from "react";
import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardMain}>
        <img src={image} alt="User avatar" className={styles.cardImg} />
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardTag}>{tag}</p>
        <p className={styles.cardLocation}>{location}</p>
      </div>

      <ul className={styles.cardInfo}>
        <li className={styles.cardInfoItem}>
          <span>Followers</span>
          <span className={styles.cardInfoValue}>{followers}</span>
        </li>
        <li className={styles.cardInfoItem}>
          <span>Views</span>
          <span className={styles.cardInfoValue}>{views}</span>
        </li>
        <li className={styles.cardInfoItem}>
          <span>Likes</span>
          <span className={styles.cardInfoValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
