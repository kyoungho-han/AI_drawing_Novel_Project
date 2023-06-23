import React from "react";
import styles from "../styles/BookGrid.module.css";

const BookGrid = (props) => {
  const { datas } = props;

  if (!datas || datas.length === 0) {
    return <div>No data available</div>;
  } else {    
    return (
      <div>
        {datas.map((data, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.image}>
            <img src="img/images.png" alt="Book" />
          </div>
          <div className={styles.details}>
            <h2>{data.title}</h2>
            <p>{data.name}</p>
            <p>{data.genre}</p>
            <hr/>
          </div>          
        </div>
        ))}
      </div>
    );
  };
}

export default BookGrid;
