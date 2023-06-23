import React, { useContext, useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { NovelContext } from '../context/NovelContext';
import axios from 'axios';

function ChapterList() {
  const { novelTitle, novelGenre, userName, novelId, setChapterId, chapterId, chapterName } = useContext(NovelContext);
  const [chapterCount, setChapterCount] = useState(1); // 챕터 개수를 관리하는 상태
  const [chapterData, setChapterData] = useState([]); // 챕터 정보를 관리하는 상태

  
  useEffect(() => {    
    axios.get('http://localhost:3000/chapters', {
      params: {
        novelId: novelId
      }
    })
      .then(response => {
        setChapterData(response.data.dtoList);
        setChapterCount(response.data.dtoList.length);
        console.log(chapterData);
      })
      .catch(error => {
        console.log(error);
      });
      
  }, [chapterCount]);
  
  const handleAddChapter = () => {
    
      setChapterCount(prevCount => prevCount + 1); // 챕터 개수를 1 증가시킴
      
      
      const data = {
        chapterName: chapterName,
        novelId: novelId,
        writing: "",
        prevChapter: chapterId
      };  
  
      axios.post('http://localhost:3000/chapters', data)
        .then(response => {
          console.log(response.data); 
          const {chapterId} = response.data.chapterId;
          console.log(chapterId);
          setChapterId(chapterId);
        })
        .catch(error => {
          console.log(error);
        });
    
  };

  const handleChapterId = (chapterId) => {
    setChapterId(chapterId);
    console.log(chapterId);
  }


  const renderChapterItems = () => {    
    for (let i = 1; i <= chapterCount; i++) {        
      return chapterData.map((chapter) => (
          <ListGroup.Item
            key={i}
            as="li"
            className="listGroup"
          >
          <div className="list">
            <Link to={`/writeChapter`}>
              <div className="fw-bold" onClick={() => handleChapterId(chapter.chapterId)}>{chapter.chapterName}</div>
            </Link>
          </div>
        </ListGroup.Item>
      ));
    }    
  };
  

  return (
    <ListGroup>
      <ListGroup.Item 
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"> {novelTitle} / {userName} / {novelGenre} </div>          
        </div>        
      </ListGroup.Item>      
      {renderChapterItems()}
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <button onClick={handleAddChapter} className="btn btn-outline-primary">
            챕터 추가
          </button>
        </div>        
      </ListGroup.Item>
    </ListGroup>
  );
}
export default ChapterList;