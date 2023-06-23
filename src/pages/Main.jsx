import React, {useEffect, useState, useContext} from "react";
import { NovelContext } from '../context/NovelContext';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../images/logo.jpeg";
import style from "../styles/Main.module.css";
import BookList from "../components/BookList";
import RankList from "../components/RankList";
import data from "../testData.json";
import CardTabs from "../components/CardTabs";
import Slides from "../components/Slides";
import { Cookies } from "react-cookie";
import { DELETE_TOKEN } from '../store/Auth';
import axios from "axios";


const Main = () => {
  const accessToken = useSelector((state) => state.authToken);
  const { userName, setUserName, at, setAt } = useContext(NovelContext);

  const navigate = useNavigate();

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.accessToken}`;
        const response = await axios.get('http://localhost:3000/authors/name', {
        });
        console.log(response);
        setAt(accessToken.authenticated);
        return setUserName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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