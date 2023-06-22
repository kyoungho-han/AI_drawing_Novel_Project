import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const NavBarElements = () => {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return null; 
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/main">
            <img
              alt="logo"
              src="/img/book.png"
              width="30"
              height="30"              
            />{' '}
              너와 나의 연결 스토리
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="insertNovelData">소설 쓰러 가기</Nav.Link>
                <Nav.Link href="bookList">소설 구경 가기</Nav.Link>                
              </Nav>
              <Nav>
                <Nav.Link href="login">로그인</Nav.Link>
                <Nav.Link eventKey={2} href="join">
                  회원가입
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBarElements;