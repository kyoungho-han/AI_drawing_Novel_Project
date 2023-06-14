import React from "react";
import cover from "../images/StartImage1.jpeg"
import styles from "../styles/Book.module.css"

function Book() {

  return(
    <div className={styles.Book}>
      <img src={cover} alt="" />
      <div className={styles.explanation}>
        <h2>제목 : 아기돼지삼형제</h2>
        <p>작가 : 윤병현</p>
        <p>페이지수 : 100</p>
      </div>
    </div>
  );

}
export default Book;