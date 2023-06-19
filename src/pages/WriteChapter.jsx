import React from 'react'
import ChapterList from '../components/ChapterList'
import styles from '../styles/WriteChapter.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';


const WriteChapter = () => {
    const location = useLocation();
    const selectedImage = location.state?.selectedImage;
    const prompt = location.state?.prompt;

    return (
        <div className={styles.section}>            
        <Container>              
        <Row>
            <Col>
                <div className={styles.imgContainer}>
                    <div className={styles.img}>
                        <img src={selectedImage} alt="선택된 이미지" />                    
                    </div>                
                    <div className={styles.img2}>
                            <img src="img/bookImg.png" alt="책 표지" />
                    </div>
                </div>
            </Col>
            <Col>
                <div className={styles.chapter}>
                    <ChapterList prompt={prompt} />
                </div><br/>
                <div className={styles.button}>
                    <Button variant="outline-info">출판하기</Button>
                </div>
            </Col>
        </Row>      
        </Container> 
        </div>
    )
}

export default WriteChapter