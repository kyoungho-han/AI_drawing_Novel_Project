import Button from 'react-bootstrap/Button';
import styles from '../styles/WriteBooks.module.css';



const WriteBooks = () => {
    
      
    return (
        
        <div className={styles.writeForm}>            
            챕터제목 : <input placeholder='chapter...'></input><hr/>
          <textarea className={styles.txtarea}
            placeholder="여기에 입력하세요"                     
          ></textarea>          
          <hr />
          <div>            
                <Button variant="outline-info">그림 선택</Button>
                <Button variant="outline-warning">임시 저장</Button>
                <Button variant="outline-success">글 작성 완료</Button>            
          </div>          
        </div>
      );
    }

export default WriteBooks;