import Tabs from "react-bootstrap/Tabs";
import { Tab, TabContent, Container } from "react-bootstrap";
import Cards from "./Cards";
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardTabs(props) {
  
  return (
    <div className="productTabs">
    <Container>
      <Tabs
        defaultActiveKey="best"             
        id="my-tabs"        
      >
        <Tab eventKey="best" title="베스트 소설">
          <TabContent>
        <Row>
            <Col>
                <Cards title="책제목1" name="글쓴이1" btn="내용 보러 가기"/>            
            </Col>
            <Col>
                <Cards title="책제목2" name="글쓴이2" btn="내용 보러 가기"/>            
            </Col>
            <Col>
                <Cards title="책제목3" name="글쓴이3" btn="내용 보러 가기"/>            
            </Col>
            <Col>
                <Cards title="책제목4" name="글쓴이4" btn="내용 보러 가기"/>            
            </Col>
        </Row>
          </TabContent>
        </Tab>        
      </Tabs>
      <br/><br/>
      <Tabs
        defaultActiveKey="latest"             
        id="my-tabs"        
      >
      <Tab eventKey="latest" title="신작 소설">
          <TabContent>
          <Row>
            <Col>
                <Cards title="책제목5" name="글쓴이5" btn="내용 보러 가기"/>            
            </Col>
            <Col>
                <Cards title="책제목6" name="글쓴이6" btn="내용 보러 가기"/>            
            </Col>
            <Col>
                <Cards title="책제목7" name="글쓴이7" btn="내용 보러 가기"/>            
            </Col>
            <Col>
                <Cards title="책제목8" name="글쓴이8" btn="내용 보러 가기"/>            
            </Col>
          </Row>          
          </TabContent>
        </Tab>
        </Tabs>
        <br/><br/>
      </Container>
    </div>
  );
}

export default CardTabs;
