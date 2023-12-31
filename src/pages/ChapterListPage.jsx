import React, {useState, useContext, useEffect} from 'react'
import { NovelContext } from '../context/NovelContext';
import ChapterList from '../components/ChapterList'
import styles from '../styles/ChapterListPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import CoverModals from '../components/CoverModals';
import axios from 'axios';
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ChapterListPage = () => {    
    const { novelId, chapterId, setChapterId } = useContext(NovelContext);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const selectedImage = location.state?.selectedImage;
    const prompt = location.state?.prompt;
    const [datas, setDatas] = useState({});

    const accessToken = useSelector((state) => state.authToken);

    useEffect(() => {
        const fetchData = async () => {
          try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.accessToken}`;
            const response = await axios.get('http://localhost:3000/chapters', {
              params: { 
                novelId: novelId
              }
            });
            setDatas(response.data);
            console.log(response.data);
          } catch (error) {
            console.log(error);            
          }
        };        
        fetchData();
      }, []); 

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSelectImg = () => {
        setShowModal(true);
    };
    
    return (
        <div className={styles.section}>            
        <Container>              
        <Row>
            <Col>
                <div className={styles.imgContainer}>                        
                    <div className={styles.img2}>
                            <img src="../img/bookImg.png" alt="책 표지" />
                    </div>
                </div>
            </Col>
            <Col>
                <div className={styles.chapter}>
                    <ChapterList novelId={novelId} />
                </div><br/>
                <div className={styles.button}>
                    <Button variant="outline-info" onClick={handleSelectImg}>출판 하기</Button>
                </div>
                <CoverModals show={showModal} handleClose={handleCloseModal} />
            </Col>            
        </Row>    
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
        </Container> <br/><br/><br/><br/><br/>
        </div>
    )
}

export default ChapterListPage