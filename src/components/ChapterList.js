import React, { useContext, useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { NovelContext } from '../context/NovelContext';
import axios from 'axios';

function ChapterList() {
  const { novelTitle, novelGenre, userName, novelId, setChapterId, chapterId } = useContext(NovelContext);
  const [chapterCount, setChapterCount] = useState(1); // 챕터 개수를 관리하는 상태
  const [chapterData, setChapterData] = useState([]); // 챕터 정보를 관리하는 상태

  useEffect(() => {
    
    const data = {
      chapterName: "",
      prevChapterId: "",
      novelId: novelId,
      writing: ""
    };  

    axios.post('http://localhost:3000/chapters', data)
      .then(response => {
        const chapters = response.data;
        console.log(chapters);
        setChapterData(chapters);
        setChapterCount(chapters.length);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddChapter = () => {
    if (chapterCount < 10) {
      setChapterCount(prevCount => prevCount + 1); // 챕터 개수를 1 증가시킴
      
      const data = {
        chapterName: "",
        novelId: novelId,
        writing: ""
      };  
  
      axios.post('http://localhost:3000/chapters', data)
        .then(response => {
          console.log(response.data); 
          const {chapterId} = response.data;
          console.log(chapterId);
          setChapterId(chapterId);
        })
        .catch(error => {
          console.log(error);
        });
      
      
    }
  };
  const renderChapterItems = () => {
    const chapterItems = [];
    for (let i = 1; i <= chapterCount; i++) {
      const currentChapterId = i; // Store the current chapter ID in a separate variable
  
      chapterItems.push(
        <ListGroup.Item
          key={i}
          as="li"
          className="listGroup"
        >
          <div className="list">
            <Link to={`/writeChapter/${currentChapterId}`}>
              <div className="fw-bold">chapter{i} 쓰기</div>
            </Link>
          </div>
        </ListGroup.Item>
      );
    }
    return chapterItems;
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