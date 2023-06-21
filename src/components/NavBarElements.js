import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const NavBarElements = () => {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return null; // 루트 페이지에서 NavBarElements를 렌더링하지 않습니다.
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">너와 나의 연결 스토리</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="insertNovelData">소설 쓰러 가기</Nav.Link>
                <Nav.Link href="bookList">소설 구경 가기</Nav.Link>                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">로그인</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  회원가입
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBarElements;