import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBarElements = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">너와 나의 연결 스토리</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="bookImageSelect">소설 쓰러 가기</Nav.Link>
                <Nav.Link href="books">소설 구경 가기</Nav.Link>                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">마이페이지</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  로그아웃
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBarElements;