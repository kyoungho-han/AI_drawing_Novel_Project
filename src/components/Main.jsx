import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import styles from "../styles/Main.module.css";
import Book from "./Book";
import Rank from "./Rank";

function Main(){

  return(
    <div id="container">
      <nav>
        <img src={Logo} alt=""></img>
        <div className={styles.menu}>
          <Link className={styles.menuLink} to='/login'>로그인</Link>
          <Link className={styles.menuLink} to='/join'>회원가입</Link>
          <Link className={styles.menuLink} to='/imagecreate'>이미지 생성</Link>
        </div>
      </nav>
      <div className={styles.title}>
        <h2>작품 리스트</h2>
      </div>
      <div className={styles.sidebar}>
       <Rank></Rank>
      </div>
      <div className={styles.contents}>
      <Link className={styles.bookLink} to='#'><Book></Book></Link>
      <Link className={styles.bookLink} to='#'><Book></Book></Link>
      <Link className={styles.bookLink} to='#'><Book></Book></Link>
      
      
      </div>
    </div>
  );
}
export default Main;