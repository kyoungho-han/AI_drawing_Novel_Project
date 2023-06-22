import React from 'react'
import Cards from '../components/Cards'
import { Col, Row } from 'react-bootstrap'
import styles from '../styles/MyNovels.module.css';
import { useNavigate } from 'react-router-dom';

const MyNovels = () => {
    const navigate = useNavigate();

    const handleBtn = () => {
        navigate('/insertNovelData');
    }
  return (
    <div>
        <br/>
        <div className={styles.name}>
            <h4>님의 서재입니다!</h4>            
        </div>
        <button className={styles.btnNew} onClick={handleBtn}>+새 작품</button>        
        <br/><br/><br/>        
        <h4>작성중인 작품</h4>
        <hr />        
            <Row>                        
                <Cards title="책제목1" btn="수정 하기" /> 
                <Cards title="책제목2" btn="수정 하기" />                        
            </Row>        
        <br/><br/>
        <h4>완성된 작품</h4>
        <hr />
        <Row>
            <Cards title="책제목3" btn="내용 보러 가기" />
        </Row>
        <br/><br/>
    </div>
  )
}

export default MyNovels