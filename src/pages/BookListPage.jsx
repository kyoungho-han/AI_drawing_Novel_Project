import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Container } from "../styles/container/Container.styled";
import { Header, MainHeader } from "../styles/header/Header.styled";
import axios from "axios";
import PageNations from "../components/PageNations";

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
        <hr />
        <br />
        <div className="row">
          <div className="col">
            <Cards title="책 제목 1" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 2" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 3" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 4" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 5" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 6" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 7" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 8" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 9" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 10" content="글쓴이" />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <PageNations />
        </div>
      </Container>
    </div>
  );
};

export default BookListPage;
