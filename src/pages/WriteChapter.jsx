import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/WriteChapter.module.css';
import Form from 'react-bootstrap/Form';
import Modals from '../components/Modals';
import axios from 'axios';

const WriteChapter = () => {
  
  const [ textValue, setTextValue ] = useState('');  
  const [showModal, setShowModal] = useState(false);  

  // 모달 닫기
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 현재 작성중인 소설 내용 전송
  const handleCompleteWriting = () => {  
    
    
    const data = {
      text: textValue
    };    
    axios.post('http://localhost:8080/chapters/1', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    setTextValue(newText);
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
              챕터제목 : <input placeholder='chapter...' size="70"></input><hr/>
            </div>           
            <textarea 
              className={styles.txtarea}
              placeholder="여기에 입력하세요"                     
              value={textValue}
              onChange={handleChange}
            ></textarea>          
            <p className={styles.byteCount}>
              {getByteCount(textValue)} bytes / {(getByteCount(textValue) / 1024).toFixed(2)} KB
            </p>
            <hr />
            <div className={styles.btn}>            
                  <Button variant="outline-info" onClick={handleSelectImg}>그림 선택</Button>
                  <Button variant="outline-warning">임시 저장</Button>
                  <Button variant="outline-success" onClick={handleCompleteWriting}>글 작성 완료</Button>
            </div>            
            <Modals show={showModal} handleClose={handleCloseModal} />          
          </div>
          
        
      );
    }

export default WriteChapter;