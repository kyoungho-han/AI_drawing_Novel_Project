import React, {useState, useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/WriteChapter.module.css';
import Form from 'react-bootstrap/Form';
import Modals from '../components/Modals';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NovelContext } from '../context/NovelContext';
import { useNavigate } from 'react-router-dom';

const WriteChapter = () => {
  const { chapterName, setChapterName, novelId, chapterId, setChapterWriting, chapterWriting } = useContext(NovelContext);
  const [ chapterTitle, setChapterTitle ] = useState('');
  const [ textValue, setTextValue ] = useState('');  
  const [ showModal, setShowModal ] = useState(false);  
  const navigate = useNavigate();

  useEffect(() => {    
    axios.get(`http://localhost:3000/chapters/${chapterId}`, {
   
    })
      .then(response => {
        console.log(response.data.chapterName);
        setChapterTitle(response.data.chapterName);
        setTextValue(response.data.writing);
        console.log(chapterWriting);
      })
      .catch(error => {
        console.log(error);
      });
      
  }, []);

  console.log(chapterId);
  // 모달 닫기
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 현재 작성중인 소설 내용 전송
  const handleCompleteWriting = () => {  
        
    const data = {
      chapterName: chapterTitle,            
      writing: textValue      
    };

    axios.put(`http://localhost:3000/chapters/${chapterId}`, data)
      .then(response => {        
        console.log(response.data); 
        navigate(`/ChapterListPage/${novelId}`);       
      })
      .catch(error => {        
        console.log(error);
      });
  };
  

  const handleChangeTitle = (event) => {
    const newTitle1 = event.target.value;
    setChapterTitle(newTitle1);
  }
  
  const handleChangeWriting = (event) => {
    const newText1 = event.target.value;
    setTextValue(newText1);
  };


  const getByteCount = (text) => {    
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(text);

    return encodedText.length;
  };

  const handleSelectImg = () => {
    setShowModal(true);
  }

    return (        
          <div className={styles.container}> 
            <div className={styles.chapterTitle}>  
              챕터제목 :<textarea className={styles.txtareaName}                                
              value={chapterTitle}
              onChange={handleChangeTitle}
            ></textarea>  <hr/>
            </div>           
            <textarea 
              className={styles.txtarea}                                
              value={textValue}
              onChange={handleChangeWriting}
            ></textarea>          
            <p className={styles.byteCount}>
              {getByteCount(textValue)} bytes / {(5000 / 1024).toFixed(2)} KB
            </p>
            <hr />
            <div className={styles.btn}>            
                  <Button variant="outline-info" onClick={handleSelectImg}>그림 선택</Button>
                  <Button variant="outline-warning">임시 저장</Button>
                  <Button variant="outline-success" onClick={handleCompleteWriting}>글 작성 완료</Button>
            </div>            
            <Modals show={showModal} handleClose={handleCloseModal} />          
            <br/><br/><br/><br/><br/><br/>
          </div>
          
          
        
      );
    }

export default WriteChapter;