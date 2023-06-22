import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import style from "../styles/Main.module.css";
import BookList from "../components/BookList";
import RankList from "../components/RankList";
import data from "../testData.json";
import CardTabs from "../components/CardTabs";
import Slides from "../components/Slides";


function Main(){

  const navigate = useNavigate();

  return(
    <div id="container">  
      <Slides />
      <br/><br/>
      <CardTabs />
      <br/><br/>
      {/* <div className="title">
        <h2>작품 리스트</h2>
      </div>
      <div className="sidebar">
        <h2>인기순위</h2>
       <RankList datas={data} onClickItem={(item) =>{
           navigate(`#`)
        }}></RankList>
      </div>
      <div className="contents">
        
        <BookList datas={data} onClickItem={(item) =>{
           navigate(`#`)
        }}></BookList>
      
      </div> */}
    </div>
  );
}
export default Main;