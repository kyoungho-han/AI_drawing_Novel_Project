import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function ChapterList() {
  return (
    <ListGroup>
      <ListGroup.Item 
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">책제목 / 글쓴이</div>          
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter1 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter2 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter3 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter4 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter5 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter6 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter7 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeBooks"><div className="fw-bold">chapter8 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ChapterList;