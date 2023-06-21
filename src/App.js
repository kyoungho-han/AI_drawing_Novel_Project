import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import WriteChapter from './pages/WriteChapter';
import NavBarElements from './components/NavBarElements';
import Footer from './components/Footer';
import { FooterStyle } from './styles/footer/Footer.styled';
import ChapterListPage from './pages/ChapterListPage';
import Start from './pages/StartPage';
import Main from './pages/Main';
import Login from './pages/LoginPage';
import UserJoin from './pages/UserJoinPage';
import ImageCreate from './components/ImageCreate';
import InsertNovelData from './pages/InsertNovelData';



function App() {
  return (    
    <Router>
      <NavBarElements />      
          <Routes>
            <Route path='/' element={<Start/>}></Route>
            <Route path='/main' element={<Main/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/join' element={<UserJoin/>}></Route>
            <Route path='/imagecreate' element={<ImageCreate/>}></Route>
            <Route path = "/bookList" element = { <BookListPage /> } />        
            <Route path = "/chapterListPage" element = { <ChapterListPage /> } />        
            <Route path = "/insertNovelData" element = { <InsertNovelData/> } />
            <Route path = "/writeChapter" element = { <WriteChapter /> } />            
          </Routes>
          <FooterStyle>
            <Footer />
          </FooterStyle>   
      </Router>
  );
}

export default App;
