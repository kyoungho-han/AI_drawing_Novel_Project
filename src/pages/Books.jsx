import Cards from "../components/Cards";
import { Container } from "../styles/container/Container.styled";
import { Header, MainHeader } from "../styles/header/Header.styled";

function Books(props) {
  return (
    <div>        
        <Container>
            <Header>
                <MainHeader>
                    <h1>소설 게시판</h1>
                </MainHeader>
            </Header><br />           
        <div className="row">
            <div className="col"><Cards title="책 제목 1" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 2" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 3" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 4" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 5" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 6" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 7" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 8" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 9" content="글쓴이" /></div>
            <div className="col"><Cards title="책 제목 10" content="글쓴이" /></div>                           
        </div>
        <br />
        </Container>        
    </div>
  );
}

export default Books;