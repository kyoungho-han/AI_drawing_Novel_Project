import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Container } from "../styles/container/Container.styled";
import { Header, MainHeader } from "../styles/header/Header.styled";
import axios from "axios";
import PageNations from "../components/PageNations";
import BookGrid from "../components/BookGrid";
import styles from "../styles/BookListPage.module.css";
import Stack from 'react-bootstrap/Stack';

const BookListPage = () => {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    axios
      .get("/api/novels")
      .then((response) => {
        setNovels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Header>
          <MainHeader>
            <h1>소설 게시판</h1>
          </MainHeader>
        </Header>
      <br/><br/>      
      <div className={styles.genre}>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">전체</div>
        <div className="p-2">추리</div>
        <div className="p-2">스릴러</div>
        <div className="p-2">공포</div>
        <div className="p-2">과학</div>
        <div className="p-2">판타지</div>
        <div className="p-2">무협</div>
        <div className="p-2">게임</div>
        <div className="p-2">로맨스</div>
        <div className="p-2">퓨전</div>
        <div className="p-2">미스터리</div>
        <div className="p-2">범죄</div>
        <div className="p-2">코미디</div>
        <div className="p-2">기타</div>
     </Stack>
     </div>
      <hr />
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />
      <hr/>
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />
      <hr/>
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />
      <hr/>
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />
      <hr/>
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />
      <hr/>
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />
      <hr/>
      <BookGrid
        imageSrc="book.jpg"
        bookName="Book Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna a metus ullamcorper."
      />

      
      <hr />              
        <br />
        <div className="d-flex justify-content-center">
          <PageNations />
        </div>
      </Container>
    </div>
  );
};

export default BookListPage;
