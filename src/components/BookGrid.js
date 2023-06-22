import React from "react";
import styles from "../styles/BookGrid.module.css";

const BookGrid = ({ imageSrc, bookName, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="img/images.png" alt="Book" />
      </div>
      <div className={styles.details}>
        <h2>{bookName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookGrid;
