import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import WriteBooks from './pages/WriteBooks';
import BookImageSelect from './pages/BookImageSelect';
import NavBarElements from './components/NavBarElements';
import Footer from './components/Footer';
import { FooterStyle } from './styles/footer/Footer.styled';
import WriteChapter from './pages/WriteChapter';
import Book from './components/Book';
import Start from './components/Start';
import Main from './components/Main';
import Login from './components/Login';
import UserJoin from './components/UserJoin';
import ImageCreate from './components/ImageCreate';
import Dalle2 from './components/Dalle2';


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
            <Route path = "/books" element = { <Books /> } />        
            <Route path = "/writeChapter" element = { <WriteChapter /> } />        
            <Route path = "/bookImageSelect" element = { <BookImageSelect/> } />
            <Route path = "/writeBooks" element = { <WriteBooks /> } />            
          </Routes>
          <FooterStyle>
            <Footer />
          </FooterStyle>   
      </Router>
  );
}

export default App;
